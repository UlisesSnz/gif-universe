import { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { GifModal, ToastNotification } from './index';
import { handleDeleteGif, handleDownloadGif } from '../helpers/index';

export const GifItem = ({ id, title, url }) => {

    const [ showModal, setShowModal ] = useState(false);
    const [ showToast, setShowToast ] = useState(false);
    const [ resDownload, setResDownload ] = useState('');

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleCloseToast  = () => setShowToast(false);
    const handleShowToast = async () => {
        setResDownload(await handleDownloadGif(title, url));
        setShowToast(true);
    }

    return (
        <Col data-id={ id }>
            <Card className="mb-3" style={{ height: '26rem' }} >
                <Card.Img variant="top" src={ url } style={{ height: '18rem' }} alt={ title } />
                <Card.Body className="card-body bg-dark bg-gradient text-white">
                    <Card.Title >{ title }</Card.Title>
                    <Button onClick={ handleShowModal } className="btn-light btn-sm me-2">Expand</Button>
                    <Button onClick={ handleDeleteGif } className="btn-danger btn-sm">Delete</Button>
                    <GifModal
                        title={ title }
                        url={ url }
                        showModal={ showModal }
                        handleCloseModal={ handleCloseModal }
                        handleShowToast={ handleShowToast }
                    />
                    <ToastNotification
                        title={ title }
                        type={ resDownload }
                        showToast={ showToast }
                        handleCloseToast={ handleCloseToast }
                    />
                </Card.Body>
            </Card>
        </Col>
    )
}
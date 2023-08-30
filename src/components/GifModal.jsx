import PropTypes from 'prop-types';
import { Button, Image, Modal } from 'react-bootstrap';

export const GifModal = ({ title, url, showModal, handleCloseModal, handleShowToast }) => {

    return (
        <Modal show={ showModal } onHide={ handleCloseModal } size="lg" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className="text-white bg-dark bg-gradient">
                <Modal.Title id="contained-modal-title-vcenter">{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image width={'100%'} src={ url } />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={ handleCloseModal }>
                    Close
                </Button>
                <Button variant="success" onClick={ handleShowToast }>
                    Download
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

GifModal.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    showModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleShowToast: PropTypes.func.isRequired,
}
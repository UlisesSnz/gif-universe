import { Col, Row, Toast } from 'react-bootstrap';
import succesImage from '../images/success.png';
import alertImage from '../images/alert.png';

export const ToastNotification = ({ title, type, showToast, handleCloseToast }) => {

    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={handleCloseToast} show={showToast} bg={type} delay={5000} autohide className="position-fixed bottom-0 end-0 m-3">
                    <Toast.Header>
                        <img
                            src={ type === 'success' ? succesImage : alertImage }
                            className="rounded me-2"
                            alt=""
                            style={{ maxWidth: '5%', height: 'auto' }}
                        />
                        <strong className="me-auto">{ type }</strong>
                        <small>Now</small>
                    </Toast.Header>
                    <Toast.Body>
                        { type === 'success' ? `${title} has been downloaded` : `${title} could not be downloaded` }
                    </Toast.Body>
                </Toast>
            </Col>
        </Row>
    )
}
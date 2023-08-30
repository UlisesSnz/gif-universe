import PropTypes from 'prop-types';
import { Col, Row, Toast } from 'react-bootstrap';
import alertImage from '../images/alert.png';
import succesImage from '../images/success.png';

export const ToastNotification = ({ title, type, showToast, handleCloseToast }) => {

    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={handleCloseToast} show={showToast} bg={type} delay={5000} autohide className="position-fixed bottom-0 end-0 m-3">
                    <Toast.Header>
                        <img
                            src={ type === 'success' ? succesImage.string : alertImage.string }
                            className="rounded me-2"
                            alt=""
                            style={{ maxWidth: '5%', height: 'auto' }}
                        />
                        <strong className="me-auto" aria-label='strong'>{ type }</strong>
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

ToastNotification.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    showToast: PropTypes.bool.isRequired,
    handleCloseToast: PropTypes.func.isRequired,
}
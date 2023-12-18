import { Button, Modal } from "reactstrap";

const ModalRate = (props) => {
    return (
        <Modal {...props} >
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )}
    export default ModalRate;
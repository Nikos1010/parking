import { Modal, Button } from "react-bootstrap";
import { PublicRoutes } from "../../models/routes";
import { useNavigate } from "react-router-dom";

function PaymentModal({ show, handleClose, amount }) {
  const navigation = useNavigate();

  const handleOk = () => {
    navigation(`/${PublicRoutes.HOME}`);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Valor a pagar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Total:</p>
        <h3>${amount}</h3>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleOk}>
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PaymentModal;

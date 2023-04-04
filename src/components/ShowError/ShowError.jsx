import { Alert } from "react-bootstrap";

function ShowError({ show, message }) {
  console.log("Hola");
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <p>{message}</p>
      </Alert>
    );
  }
}

export default ShowError;

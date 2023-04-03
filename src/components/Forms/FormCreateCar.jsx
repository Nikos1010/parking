import { Button, Form, FloatingLabel } from "react-bootstrap";

function FormCreateCar() {
  return (
    <Form className="d-flex justify-content-center flex-column rounded border border-info p-3">
      <Form.Group className="mb-3">
        <FloatingLabel
          controlId="floatingPlate"
          label="Ingresa la placa"
          className="mb-3">
          <Form.Control type="text" placeholder="xxx-0000" />
        </FloatingLabel>
      </Form.Group>
      <div class="d-grid gap-2 col-6 mx-auto">
        <Button variant="primary" type="submit">
          Registrar Vehiculo
        </Button>
      </div>
    </Form>
  );
}
export default FormCreateCar;

import { Button, Form } from "react-bootstrap";

function FormCreateCar() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Registra la placa del Carro</Form.Label>
        <Form.Control type="text" placeholder="Ingresa Placa" />
      </Form.Group>
      <Button className="center" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export default FormCreateCar;

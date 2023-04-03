import { useState } from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";

function FormRegisterCar({ addCar }) {
  const [plate, setPlate] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { plate, date, time };
    addCar(newCar);
    setPlate("");
    setDate("");
    setTime("");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center flex-column rounded border border-info p-3">
      <h3 className="text-center text-primary mb-3">Registrar Entrada</h3>
      <Form.Group className="mb-3">
        <FloatingLabel
          controlId="floatingPlate"
          label="Ingresa la placa"
          className="mb-3">
          <Form.Control
            type="text"
            placeholder="xxx-0000"
            onChange={(e) => setPlate(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Row>
        <Col>
          <FloatingLabel
            controlId="floatingDate"
            label="Fecha de Entrada"
            className="mb-3">
            <Form.Control
              type="date"
              placeholder="22/03/2023"
              onChange={(e) => setDate(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="floatingTime"
            label="Hora de Entrada"
            className="mb-3">
            <Form.Control
              type="time"
              placeholder="03:00"
              onChange={(e) => setTime(e.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="primary" type="submit">
          Registrar Entrada
        </Button>
      </div>
    </Form>
  );
}
export default FormRegisterCar;

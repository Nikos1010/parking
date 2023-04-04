import { Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

function DateTime({ setDateTime }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (date && time) {
      const datetime = new Date(`${date}T${time}:00`);
      setDateTime(datetime);
    }
  }, [date, time]);

  return (
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
  );
}
export default DateTime;

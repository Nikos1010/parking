import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { registerTypeCar } from "../../api";
import SelectPlate from "./SelectPlate";

function FormRegisterType({ type }) {
  const [plate, setPlate] = useState("");
  const [plateError, setPlateError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(plate);
    if (plate) {
      registerTypeCar(plate, type || "No Residente");
      setPlate("");
    } else {
      setPlateError("Debe seleccionar una placa");
    }
  };

  const setSelectedPlate = (selectedPlate) => {
    setPlate(selectedPlate);
    setPlateError(null);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center flex-column rounded border border-info p-3">
      <h3 className="text-center text-primary mb-3">Registrar Vehiculo</h3>
      <Row>
        <Col>
          <SelectPlate
            plateError={plateError}
            plate={plate}
            setSelectedPlate={setSelectedPlate}
          />
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control placeholder={type} disabled />
          </Form.Group>
        </Col>
      </Row>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="primary" type="submit">
          Dar de alta Vehiculo {type}
        </Button>
      </div>
    </Form>
  );
}
export default FormRegisterType;

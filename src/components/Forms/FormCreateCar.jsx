import { Button, Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";
import { createCar } from "../../api";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../models/routes";

function FormCreateCar() {
  const navigate = useNavigate();
  const [plate, setPlate] = useState("");
  const [plateError, setPlateError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const plateRegex = /^[A-Z]{3}-\d{5}$/;
    if (plateRegex.test(plate)) {
      createCar(plate);
      navigate(`/${PublicRoutes.HOME}`);
    } else {
      setPlateError("Ejemplo de la placa: AWS-12345");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center flex-column rounded border border-info p-3">
      <h3 className="text-center text-primary mb-3">Crear Vehiculo</h3>
      <Form.Group className="mb-3">
        <FloatingLabel
          controlId="floatingPlate"
          label="Ingresa la placa"
          className="mb-3">
          <Form.Control
            type="text"
            placeholder="xxx-0000"
            onChange={(e) => setPlate(e.target.value)}
            value={plate}
            style={{ borderColor: plateError ? "red" : "" }}
          />
          {plateError ? (
            <Form.Text className="text-danger">{plateError}</Form.Text>
          ) : null}
        </FloatingLabel>
      </Form.Group>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="primary" type="submit">
          Registrar Vehiculo
        </Button>
      </div>
    </Form>
  );
}
export default FormCreateCar;

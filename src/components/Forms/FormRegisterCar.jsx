import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SelectPlate from "./SelectPlate";
import DateTime from "./DateTime";

function FormRegisterCar() {
  const [plate, setPlate] = useState("");
  const [plateError, setPlateError] = useState("");
  const [registerTime, setRegisterTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(plate);
    if (plate) {
      console.log(registerTime);
      setPlate("");
    } else {
      setPlateError("Debe seleccionar una placa");
    }
  };

  const setSelectedPlate = (selectedPlate) => {
    setPlate(selectedPlate);
    setPlateError(null);
  };

  const setDateTime = (dateTime) => {
    setRegisterTime(dateTime);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center flex-column rounded border border-info p-3">
      <h3 className="text-center text-primary mb-3">Registrar Entrada</h3>
      <Form.Group className="mb-3">
        <SelectPlate
          plate={plate}
          setSelectedPlate={setSelectedPlate}
          plateError={plateError}
        />
      </Form.Group>
      <DateTime setDateTime={setDateTime} />
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="primary" type="submit">
          Registrar Entrada
        </Button>
      </div>
    </Form>
  );
}
export default FormRegisterCar;

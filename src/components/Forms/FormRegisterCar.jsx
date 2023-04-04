import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SelectPlate from "./SelectPlate";
import DateTime from "./DateTime";
import { registerCheckinCar, registerCheckoutCar } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../models/routes";

function FormRegisterCar() {
  const { lisencePlate } = useParams();
  const navigation = useNavigate();

  const [plate, setPlate] = useState("");
  const [plateError, setPlateError] = useState("");
  const [registerTime, setRegisterTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(plate || lisencePlate);
    if ((plate || lisencePlate) && registerTime) {
      lisencePlate
        ? registerCheckoutCar(lisencePlate, registerTime)
        : registerCheckinCar(plate, registerTime);
      // navigation(PublicRoutes.HOME); //No esta funcionando
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
      {lisencePlate ? (
        <>
          <h3 className="text-center text-primary mb-3">Registrar Salida</h3>
          <Form.Group className="mb-3">
            {" "}
            <Form.Control value={lisencePlate} disabled />
          </Form.Group>
        </>
      ) : (
        <>
          <h3 className="text-center text-primary mb-3">Registrar Entrada</h3>
          <Form.Group className="mb-3">
            <SelectPlate
              plate={plate}
              setSelectedPlate={setSelectedPlate}
              plateError={plateError}
              registerTime={true}
            />
          </Form.Group>
        </>
      )}
      <DateTime setDateTime={setDateTime} />
      <div className="d-grid gap-2 col-6 mx-auto">
        <Button variant="primary" type="submit">
          Registrar {lisencePlate ? "Salida" : "Entrada"}
        </Button>
      </div>
    </Form>
  );
}
export default FormRegisterCar;

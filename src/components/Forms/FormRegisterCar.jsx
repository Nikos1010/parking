import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SelectPlate from "./SelectPlate";
import DateTime from "./DateTime";
import { amountToPay, registerCheckinCar } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../models/routes";
import PaymentModal from "./PaymentModal";

function FormRegisterCar() {
  const { lisencePlate } = useParams();
  const navigation = useNavigate();

  const [plate, setPlate] = useState("");
  const [plateError, setPlateError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [registerTime, setRegisterTime] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!plate && !lisencePlate) {
      setPlateError("Debe seleccionar una placa");
      return;
    }

    if (!registerTime) {
      setErrorMessage("Debe seleccionar una fecha y hora de registro");
      return;
    }

    let response;
    if (lisencePlate) {
      response = await amountToPay(lisencePlate, registerTime);
    } else {
      registerCheckinCar(plate, registerTime);
    }
    if (!isNaN(response)) {
      setPaymentAmount(response);
      setShowModal(true);
    }

    if (!response) {
      navigation(`/${PublicRoutes.HOME}`);
    }

    if (isNaN(response)) {
      setErrorMessage(response);
    }
  };

  const setSelectedPlate = (selectedPlate) => {
    setPlate(selectedPlate);
    setPlateError(null);
  };

  const setDateTime = (dateTime) => {
    setRegisterTime(dateTime);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPaymentAmount("");
  };

  return (
    <>
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
        {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
        <div className="d-grid gap-2 col-6 mx-auto">
          <Button variant="primary" type="submit">
            Registrar {lisencePlate ? "Salida" : "Entrada"}
          </Button>
        </div>
      </Form>
      <PaymentModal
        show={showModal}
        handleClose={handleCloseModal}
        amount={paymentAmount}
      />
    </>
  );
}
export default FormRegisterCar;

import { useEffect } from "react";
import { Modal, Table } from "react-bootstrap";
import { filterResidentCars, getCars } from "../../api";
import { useState } from "react";

function InfoModal({ show, onHide }) {
  const [carsFiltered, setCarsFiltered] = useState();

  useEffect(() => {
    async function load() {
      const response = await getCars();
      const data = response.data;
      setCarsFiltered(filterResidentCars(data));
    }
    load();
  }, [show, carsFiltered]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Informe de Vehiculos Residentes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Placa</th>
              <th>Tiempo estacionado (Minutos)</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {carsFiltered &&
              carsFiltered.map((car) => (
                <tr key={car.plate}>
                  <td>{car.plate}</td>
                  <td>{car.totalTimeMonth}</td>
                  <td>${car.totalTimeMonth * 0.5}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}

export default InfoModal;

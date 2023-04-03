import { Table } from "react-bootstrap";
import { getCars } from "../../../api";
import { useEffect, useState } from "react";
import BodyTable from "./BodyTable";

function ContentTable() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function loadCars() {
      const response = await getCars();
      setCars(response.data);
    }
    loadCars();
  }, []);
  return (
    <Table striped bordered hover variant="dark" className="text-center">
      <thead>
        <tr>
          <th>Placa</th>
          <th>Hora Entrada</th>
          <th>Registrar Salida</th>
          <th>Tipo de Vehiculo</th>
        </tr>
      </thead>
      <tbody>
        <BodyTable cars={cars} />
      </tbody>
    </Table>
  );
}
export default ContentTable;

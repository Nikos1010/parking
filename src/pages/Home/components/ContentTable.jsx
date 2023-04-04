import { Table } from "react-bootstrap";
import { filterCars, getCars } from "../../../api";
import { useEffect, useState } from "react";
import BodyTable from "./BodyTable";

function ContentTable({ updateCars }) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function loadCars() {
      const response = await getCars();
      const FilterCars = filterCars(response.data);
      setCars(FilterCars);
    }
    loadCars();
  }, [updateCars]);

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
        {cars.map((car) => (
          <BodyTable key={car.plate} car={car} />
        ))}
      </tbody>
    </Table>
  );
}
export default ContentTable;

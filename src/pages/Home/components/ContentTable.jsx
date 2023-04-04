import { Table } from "react-bootstrap";
import BodyTable from "./BodyTable";

function ContentTable({ cars, modifiedCar = false }) {
  return (
    <Table striped bordered hover variant="dark" className="text-center">
      <thead>
        <tr>
          <th>Placa</th>
          <th>Tipo de Vehiculo</th>
          <th>{modifiedCar ? "Ver Mas" : "Hora Entrada"}</th>
          {modifiedCar ? "" : <th> "Registrar Salida"</th>}
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <BodyTable modified={modifiedCar} key={car.plate} car={car} />
        ))}
      </tbody>
    </Table>
  );
}
export default ContentTable;

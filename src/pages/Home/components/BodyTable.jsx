import { BsFillCalendar2CheckFill } from "react-icons/bs";

function BodyTable({ cars }) {
  return (
    <>
      {cars.map((car) => (
        <tr key={car.plate}>
          <td>{car.plate}</td>
          <td>{car.date}</td>
          <td>
            <BsFillCalendar2CheckFill />
          </td>
          <td>{car.typeCar}</td>
        </tr>
      ))}
    </>
  );
}
export default BodyTable;

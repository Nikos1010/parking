import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { PublicRoutes } from "../../../models/routes";
import { Link } from "react-router-dom";

function BodyTable({ car }) {
  return (
    <>
      <tr>
        <td>{car.plate}</td>
        <td>{car.stayTime[0].entryTime}</td>
        <td>
          <Link replace to={`/${PublicRoutes.CHECKOUT}/${car.plate}`}>
            <BsFillCalendar2CheckFill />
          </Link>
        </td>
        <td>{car.typeCar}</td>
      </tr>
    </>
  );
}
export default BodyTable;

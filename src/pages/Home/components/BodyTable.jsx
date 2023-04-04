import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { PublicRoutes } from "../../../models/routes";
import { Link } from "react-router-dom";

function BodyTable({ car, modified = false }) {
  return (
    <>
      <tr>
        <td>{car.plate}</td>
        <td>{car.typeCar}</td>
        <td>
          {!modified ? (
            car.stayTime[0].entryTime
          ) : (
            <Link replace to={`/${PublicRoutes.HOME}/${car.plate}`}>
              Ver mas
            </Link>
          )}
        </td>
        {!modified && (
          <td>
            <Link replace to={`/${PublicRoutes.CHECKOUT}/${car.plate}`}>
              <BsFillCalendar2CheckFill />
            </Link>
          </td>
        )}
      </tr>
    </>
  );
}
export default BodyTable;

import { Row } from "react-bootstrap";
import ContentTable from "./components/ContentTable";
import { filterCars, getCars } from "../../api";
import { useEffect, useState } from "react";

function Home() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    async function loadCars() {
      const response = await getCars();
      const allCars = response.data;
      setCars(allCars);
      setFilteredCars(filterCars(allCars));
    }
    loadCars();
  }, []);

  return (
    <>
      <Row className="my-4">
        <h3 className="text-center">Registrados en el Parqueadero</h3>
        <ContentTable cars={filteredCars} />
      </Row>
      <hr />
      <Row className="my-4">
        <h3 className="text-center">Todos los Carros</h3>
        <ContentTable cars={cars} modifiedCar={true} />
      </Row>
    </>
  );
}
export default Home;

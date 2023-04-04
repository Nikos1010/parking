import { FormRegisterCar } from "../../components";
import { Row } from "react-bootstrap";
import ContentTable from "./components/ContentTable";
import { useState } from "react";

function Home() {
  const [cars, setCars] = useState([]);

  const handleAddCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  return (
    <>
      <Row>
        <FormRegisterCar addCar={handleAddCar} />
      </Row>
      <Row className="my-4">
        <ContentTable cars={cars} />
      </Row>
    </>
  );
}
export default Home;

import { FormRegisterCar } from "../../components";
import { Container, Row } from "react-bootstrap";
import ContentTable from "./components/ContentTable";
import { useState } from "react";

function Home() {
  const [cars, setCars] = useState([]);

  const handleAddCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  return (
    <Container className="my-4" fluid="md">
      <Row>
        <FormRegisterCar addCar={handleAddCar} />
      </Row>
      <Row className="my-4">
        <ContentTable cars={cars} />
      </Row>
    </Container>
  );
}
export default Home;

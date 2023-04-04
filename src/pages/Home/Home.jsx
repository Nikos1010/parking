import { FormRegisterCar } from "../../components";
import { Row } from "react-bootstrap";
import ContentTable from "./components/ContentTable";
import { useState } from "react";

function Home() {
  const [updateCars, setUpdateCars] = useState(false);

  const handleUpdateCars = () => {
    setUpdateCars(!updateCars);
  };

  return (
    <>
      <Row>
        <FormRegisterCar onUpdateCars={handleUpdateCars} />
      </Row>
      <Row className="my-4">
        <ContentTable updateCars={updateCars} />
      </Row>
    </>
  );
}
export default Home;

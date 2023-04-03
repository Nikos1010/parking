import { FormCreateCar } from "../../components";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container className="my-4" fluid="md">
      <Row>
        <Col>
          <FormCreateCar />
        </Col>
        <Col>Tabla</Col>
      </Row>
    </Container>
  );
}
export default Home;

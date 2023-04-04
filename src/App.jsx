import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  FormCreateCar,
  FormRegisterCar,
  FormRegisterType,
  NavBar,
} from "./components";
import { ErrorPage, Home } from "./pages";
import { PublicRoutes } from "./models/routes";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className="my-4" fluid="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.CREATECAR} element={<FormCreateCar />} />
          <Route
            path={PublicRoutes.OFICIAL}
            element={<FormRegisterType type="Oficial" />}
          />
          <Route
            path={`${PublicRoutes.CHECKOUT}/:lisencePlate`}
            element={<FormRegisterCar />}
          />
          <Route
            path={PublicRoutes.RESIDENT}
            element={<FormRegisterType type="Residente" />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

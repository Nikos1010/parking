import { Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components";
import { ErrorPage, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { filterPlate, getCars } from "../../api";

function SelectPlate({
  plate,
  setSelectedPlate,
  plateError,
  registerTime = false,
}) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function loadCars() {
      const response = await getCars();
      let FilterPlates = response.data;
      if (registerTime) {
        FilterPlates = filterPlate(response.data);
      }
      setCars(FilterPlates);
    }
    loadCars();
  }, []);

  return (
    <Form.Group className="mb-3">
      <Form.Select
        className="mb-3"
        onChange={(e) => setSelectedPlate(e.target.value)}
        value={plate}
        style={{ borderColor: plateError ? "red" : "" }}>
        <option value="">Escoja la placa</option>
        {cars.map((c) => (
          <option key={c.plate} value={c.plate}>
            {c.plate}
          </option>
        ))}
      </Form.Select>
      {plateError ? (
        <Form.Text className="text-danger">{plateError}</Form.Text>
      ) : null}
    </Form.Group>
  );
}
export default SelectPlate;

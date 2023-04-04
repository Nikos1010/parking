import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCar } from "../../api";

function InformationCar() {
  const { plate } = useParams();
  const [vehicle, setVehicle] = useState();

  useEffect(() => {
    async function loadCar() {
      const response = await getCar(plate);
      const [data] = response.data;
      setVehicle(data);
    }
    loadCar();
  }, [plate]);

  return (
    <Card className="my-3 shadow">
      <Card.Body>
        <Card.Title className="mb-4">Información del vehículo</Card.Title>
        <Card.Text>
          <strong>Placa: </strong>
          {plate}
        </Card.Text>
        {vehicle && (
          <>
            <Card.Text>
              <strong>Tipo de vehículo: </strong>
              {vehicle.typeCar}
            </Card.Text>
            <Card.Text>
              <strong>Tiempo de estancia: </strong>
              {vehicle.typeCar === "Residente" &&
                `${vehicle.totalTimeMonth} Minutos`}
            </Card.Text>
            {vehicle.stayTime.map((time, index) => (
              <div key={index}>
                {time.entryTime && (
                  <>
                    <Card.Text className="mb-1">
                      <strong>Entrada: </strong>
                      {time.entryTime}
                    </Card.Text>
                    <Card.Text className="mb-1">
                      <strong>Salida: </strong>
                      {time.departureTime}
                    </Card.Text>
                  </>
                )}
              </div>
            ))}
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default InformationCar;

export const filterCars = (cars) => {
  return [...cars].filter(
    (car) => car.stayTime[0].entryTime && !car.stayTime[0].departureTime
  );
};

export const filterPlate = (cars, type) => {
  if (type) {
    return [...cars].filter((car) => car.typeCar !== type);
  }
  return [...cars].filter(
    (car) => !car.stayTime[0].entryTime && !car.stayTime[0].departureTime
  );
};

export const filterResidentCars = (cars) => {
  return [...cars].filter(
    (car) => car.typeCar === "Residente" && car.totalTimeMonth
  );
};

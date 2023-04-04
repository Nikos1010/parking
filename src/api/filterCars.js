export const filterCars = (cars) => {
  return [...cars].filter(
    (car) => car.stayTime[0].entryTime && !car.stayTime[0].departureTime
  );
};

export const filterPlate = (cars) => {
  return [...cars].filter(
    (car) => !car.stayTime[0].entryTime && !car.stayTime[0].departureTime
  );
};

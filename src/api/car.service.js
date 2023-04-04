import { getCar, registerCheckoutCar } from "./cars.api";

export const amountToPay = async (plate, registerTime) => {
  const response = await getCar(plate);
  const car = response.data;

  const entryTime = new Date(car[0].stayTime[0].entryTime);
  const typeCar = car[0].typeCar;

  if (isValidateDateRange(entryTime, registerTime)) {
    return "La fecha de registro es menor que la fecha de entrada.";
  }

  if (typeCar === "Oficial" || typeCar === "Residente") {
    // registerCheckoutCar(plate, { time: registerTime, typeCar: true });
    return;
  }

  //   registerCheckoutCar(car.plate, { time: registerTime });
  return calculatePay(entryTime, registerTime);
};

export const calculatePay = (entryTime, departureTime) => {
  const diffInMillis = departureTime.getTime() - entryTime.getTime();

  return Math.floor(diffInMillis / 60000) * 0.5;
};

export const isValidateDateRange = (start, end) => {
  return end.getTime() < start.getTime();
};

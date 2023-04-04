import axios from "axios";

const urlApi = "http://localhost:3003/api/cars";

export const createCar = (plate) => {
  axios
    .post(urlApi, {
      plate,
      typeCar: "No Residente",
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCars = async () => await axios.get(urlApi);

export const getCar = async (plate) => await axios.get(`${urlApi}/${plate}`);

export const registerTypeCar = (plate, typeCar) => {
  axios
    .put(`${urlApi}/${plate}/typeCar`, {
      typeCar,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const registerCheckinCar = (plate, time) => {
  axios
    .put(`${urlApi}/${plate}`, {
      stayTime: [
        {
          entryTime: time,
          departureTime: "",
        },
      ],
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

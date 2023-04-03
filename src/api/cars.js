import axios from "axios";

const urlApi = "http://localhost:3003/api/cars";

export const createCar = (plate, entryDate, entryTime) => {
  axios
    .post(urlApi, {
      plate: plate,
      entryDate: entryDate,
      entryTime: entryTime,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCars = async () => await axios.get(urlApi);

import axios from "axios";
export const getSpecificCarData = async (carId) => {
  try {
    const {
      data: {
        data: { car },
      },
    } = await axios.get(`/car/fetch-car/${carId}`);
    return car;
  } catch (error) {
    console.log(error.message);
  }
};

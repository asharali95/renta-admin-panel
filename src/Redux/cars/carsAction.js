import axios from "axios";

export const fetchcars = () => async (dispatch) => {
  try {
    const {
      data: {
        data: { cars },
      },
    } = await axios.get("/car/fetch-car");
    dispatch({ type: "SET_CAR", payload: { cars } });
  } catch (error) {
    console.log(error.message);
  }
};

// export const addCar = () => async (dispatch) => {
//   try {
//   } catch (error) {
//     console.log(error.message);
//   }
// };

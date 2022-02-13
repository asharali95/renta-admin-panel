import axios from "axios";

export const fetchOrders = () => async (dispatch) => {
  try {
    const {
      data: {
        data: { orders },
      },
    } = await axios.get("/order/fetch-order");
    dispatch({ type: "SET_ORDER", payload: { orders } });
  } catch (error) {
    console.log(error.message);
  }
};

export const clearOrder = () => (dispatch) => {
  try {
    dispatch({ type: "CLEAR_ORDER" });
  } catch (error) {
    console.log(error.message);
  }
};

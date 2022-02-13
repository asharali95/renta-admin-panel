import axios from "axios";
import history from "../../history";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      var {
        data: {
          data: { user },
        },
      } = await axios.post(`/auth/login`, { email, password });
      console.log(user);
      dispatch({
        type: "SET_USER",
        payload: {
          user,
        },
      });
      history.push("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

export const logout = () => async (dispatch) => {
  dispatch({
    type: "REMOVE_USER",
  });
};

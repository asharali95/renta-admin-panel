const carReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "SET_CAR":
      return payload.cars;

    default:
      return state;
  }
};

export default carReducer;

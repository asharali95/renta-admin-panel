const orderReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "SET_ORDER":
      return payload.orders;
    case "CLEAR_ORDER":
      return [];
    default:
      return state;
  }
};

export default orderReducer;

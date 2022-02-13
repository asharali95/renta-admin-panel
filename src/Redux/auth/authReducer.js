const authReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...payload.user };
    case "REMOVE_USER":
      return {};
    default:
      return state;
  }
};

export default authReducer;

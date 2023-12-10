export const USER_ACTiON_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
export const userReducer = (state, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case USER_ACTiON_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

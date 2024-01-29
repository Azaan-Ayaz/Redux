import ADD_NEW_ELEMENT from "../action";

const initailState = [1, 2, 3];
const numberReducer = (state = initailState, action) => {
  console.log("actions", action);
  switch (
    action.type // ADD_NEW_ELEMENT
  ) {
    case ADD_NEW_ELEMENT:
      return [...state, state.length + 1];
  }
  return state;
};

export default numberReducer;

export function setPrevId(id) {
  return {
    type: "SET_PREV_ID",
    id
  };
}

const initialState = {
  prevId: ""
};

const generalReducer = (generalState = initialState, action) => {
  switch (action.type) {
    case "SET_PREV_ID":
      return {
        ...generalState,
        prevId: action.id
      };

    default:
      return generalState;
  }
};

export default generalReducer;

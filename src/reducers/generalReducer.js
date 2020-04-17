export function setPrevId(id) {
  return {
    type: "SET_PREV_ID",
    id,
  };
}

export function setPortrait(img) {
  return {
    type: "SET_PORTRAIT",
    img,
  };
}

const initialState = {
  prevId: "",
  portrait: null,
};

const generalReducer = (generalState = initialState, action) => {
  switch (action.type) {
    case "SET_PREV_ID":
      return {
        ...generalState,
        prevId: action.id,
      };
    case "SET_PORTRAIT":
      return {
        ...generalState,
        portrait: action.img,
      };
    default:
      return generalState;
  }
};

export default generalReducer;

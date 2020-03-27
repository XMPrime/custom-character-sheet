export function setCharClasses(data) {
  return {
    type: "SET_CHAR_CLASSES",
    data
  };
}
export function setRaces(data) {
  return {
    type: "SET_RACES",
    data
  };
}

export function setStartingClass(startingClass) {
  return {
    type: "SET_STARTING_CLASS",
    startingClass
  };
}

const initialState = {
  charClasses: false,
  races: false,
  startingClass: false
};

const characterCreationReducer = (
  characterCreationState = initialState,
  action
) => {
  switch (action.type) {
    case "SET_CHAR_CLASSES":
      return {
        ...characterCreationState,
        charClasses: action.data
      };
    case "SET_RACES":
      return {
        ...characterCreationState,
        races: action.data
      };
    case "SET_STARTING_CLASS":
      return {
        ...characterCreationState,
        startingClass: action.id
      };
    default:
      return characterCreationState;
  }
};

export default characterCreationReducer;

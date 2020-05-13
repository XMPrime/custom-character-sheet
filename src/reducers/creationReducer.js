// export function setStartingClass(startingClass) {
//   return {
//     type: "SET_STARTING_CLASS",
//     startingClass,
//   };
// }

// export function setRace(data) {
//   return {
//     type: "SET_RACE",
//     data,
//   };
// }

// export function setSubrace(data) {
//   return {
//     type: "SET_SUBRACE",
//     data,
//   };
// }

// export function setBackground(data) {
//   return {
//     type: "SET_BACKGROUND",
//     data,
//   };
// }

// export function setCharLevel(data) {
//   return {
//     type: "SET_CHAR_LEVEL",
//     data,
//   };
// }

// export function setExperience(data) {
//   return {
//     type: "SET_EXPERIENCE",
//     data,
//   };
// }

export function setTextInput(id, text) {
  return {
    type: "SET_TEXT_INPUT",
    text,
  };
}

export function setDropdownSelection(id, value) {
  return {
    type: "SET_DROPDOWN_SELECTION",
    id,
    value,
  };
}

const initialState = {
  charName: "",
  charlevel: 1,
  experience: 0,
  startingClass: false,
  multiclass: false,
  alignment: false,
  background: false,
  race: false,
  subrace: false,
};

export default function creationReducer(creationState = initialState, action) {
  switch (action.type) {
    case "SET_DROPDOWN_SELECTION":
      return {
        ...creationState,
        [action.id]: action.value,
      };
    case "SET_TEXT_INPUT":
      console.log(action.text);
      return {
        ...creationState,
        [action.id]: action.text,
      };
    // case "SET_STARTING_CLASS":
    //   return {
    //     ...characterCreationState,
    //     charClasses: action.data,
    //   };
    // case "SET_RACE":
    //   return {
    //     ...characterCreationState,
    //     races: action.data,
    //   };
    // case "SET_SUBRACE":
    //   return {
    //     ...characterCreationState,
    //     subraces: action.data,
    //   };
    // case "SET_BACKGROUND":
    //   return {
    //     ...characterCreationState,
    //     backgrounds: action.data,
    //   };
    // case "SET_STARTING_CLASS":
    //   console.log("test");
    //   return {
    //     ...characterCreationState,
    //     startingClass: action.startingClass,
    //   };
    // case "SET_RACE":
    //   return {
    //     ...characterCreationState,
    //     race: action.race,
    //   };
    // case "SET_SUBRACE":
    //   return {
    //     ...characterCreationState,
    //     subrace: action.subrace,
    //   };
    // case "ADD_RACE_BONUS":
    //   const prevRaceBonuses = characterCreationState.raceBonuses;
    //   return {
    //     ...characterCreationState,
    //     raceBonuses: { ...prevRaceBonuses, ...action.bonus },
    //   };
    // case "CLEAR_RACE_BONUSES":
    //   return {
    //     ...characterCreationState,
    //     raceBonuses: initialState.raceBonuses,
    //   };
    default:
      return creationState;
  }
}

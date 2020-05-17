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

export function setUserInput(name, value) {
  return {
    type: "SET_USER_INPUT",
    name,
    value,
  };
}

export function setSubraceOptions(id, value) {
  return {
    type: "SET_SUBRACE_OPTIONS",
    id,
    value,
  };
}

const initialState = {
  charName: "",
  charlevel: 1,
  experience: "",
  startingClass: false,
  multiclass: false,
  alignment: false,
  background: false,
  race: false,
  subrace: false,
};

export default function creationReducer(creationState = initialState, action) {
  console.log(creationState);
  switch (action.type) {
    case "SET_DROPDOWN_SELECTION":
      return {
        ...creationState,
        [action.id]: action.value,
      };
    case "SET_USER_INPUT":
      return {
        ...creationState,
        [action.name]: action.value,
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

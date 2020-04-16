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

export function setSubraces(data) {
  return {
    type: "SET_SUBRACES",
    data
  };
}

export function setBackgrounds(data) {
  return {
    type: "SET_BACKGROUNDS",
    data
  };
}

export function setStartingClass(startingClass) {
  return {
    type: "SET_STARTING_CLASS",
    startingClass
  };
}

export function setRace(race) {
  return {
    type: "SET_RACE",
    race
  };
}

export function setSubrace(subrace) {
  return {
    type: "SET_SUBRACE",
    subrace
  };
}

export function addRaceBonus(bonus) {
  return {
    type: "ADD_RACE_BONUS",
    bonus
  };
}

export function clearRaceBonuses() {
  return {
    type: "CLEAR_RACE_BONUSES"
  };
}

const initialState = {
  charClasses: false,
  races: false,
  subraces: false,
  backgrounds: false,
  startingClass: false,
  race: false,
  subrace: false,
  raceBonuses: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 }
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
    case "SET_SUBRACES":
      return {
        ...characterCreationState,
        subraces: action.data
      };
    case "SET_BACKGROUNDS":
      return {
        ...characterCreationState,
        backgrounds: action.data
      };
    case "SET_STARTING_CLASS":
      console.log("test");
      return {
        ...characterCreationState,
        startingClass: action.startingClass
      };
    case "SET_RACE":
      return {
        ...characterCreationState,
        race: action.race
      };
    case "SET_SUBRACE":
      return {
        ...characterCreationState,
        subrace: action.subrace
      };
    case "ADD_RACE_BONUS":
      const prevRaceBonuses = characterCreationState.raceBonuses;
      return {
        ...characterCreationState,
        raceBonuses: { ...prevRaceBonuses, ...action.bonus }
      };
    case "CLEAR_RACE_BONUSES":
      return {
        ...characterCreationState,
        raceBonuses: initialState.raceBonuses
      };
    default:
      return characterCreationState;
  }
};

export default characterCreationReducer;

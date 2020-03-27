import { modifierCalc } from "../js/utils";

export function setAbilityScore(name, score) {
  const abilityMod = modifierCalc(score);
  return {
    type: "SET_ABILITY_SCORE",
    name,
    score,
    abilityMod
  };
}

export function setPrevId(id) {
  return {
    type: "SET_PREV_ID",
    id
  };
}

const initialState = {
  prevId: "test",
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
  strMod: 0,
  dexMod: 0,
  conMod: 0,
  intMod: 0,
  wisMod: 0,
  chaMod: 0
};

const abilityScoresReducer = (abilityScoresState = initialState, action) => {
  switch (action.type) {
    case "SET_ABILITY_SCORE":
      return {
        ...abilityScoresState,
        [action.name]: action.score,
        [`${action.name}Mod`]: action.abilityMod
      };
    case "SET_PREV_ID":
      console.log(action.id);
      return {
        ...abilityScoresState,
        prevId: action.id
      };
    default:
      return abilityScoresState;
  }
};

export default abilityScoresReducer;

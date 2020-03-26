// import { UPDATE_STR, UPDATE_DEX, UPDATE_CON, UPDATE_INT, UPDATE_WIS, UPDATE_CHA } from "../actions/actions";

// const initialState = {
//   proficiencyBonus: 0,
//   strScore: 10,
//   dexScore: 10,
//   conScore: 10,
//   intScore: 10,
//   wisScore: 10,
//   chaScore: 10,

//   //0 = non-proficient, 1 = proficient, 2 = expertise

//   //STRENGTH
//   strSave: 0,
//   athletics: 0,
//   //DEXTERITY
//   dexSave: 0,
//   acrobatics: 0,
//   sleightOfHand: 0,
//   stealth: 0,
//   //CONSTITUTION
//   conSave: 0,
//   //INTELLIGENCE
//   intSave: 0,
//   arcana: 0,
//   history: 0,
//   investigation: 0,
//   nature: 0,
//   religion: 0,
//   //WISDOM
//   wisSave: 0,
//   animalHandling: 0,
//   insight: 0,
//   medicine: 0,
//   perception: 0,
//   survival: 0,
//   //CHARSIMA
//   chaSave: 0,
//   deception: 0,
//   intimidation: 0,
//   performance: 0,
//   persuasion: 0
// };
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

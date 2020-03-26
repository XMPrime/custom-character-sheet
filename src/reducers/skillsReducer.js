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
export function updateSkill(skill) {
  return {
    type: "UPDATE_SKILL",
    skill
  };
}

const initialSkillsList = [
  { name: "acrobatics", ability: "dex", proficient: false },
  { name: "animal handling", ability: "wis", proficient: false },
  { name: "arcana", ability: "int", proficient: false },
  { name: "athletics", ability: "str", proficient: false },
  { name: "deception", ability: "cha", proficient: false },
  { name: "history", ability: "int", proficient: false },
  { name: "insight", ability: "wis", proficient: false },
  { name: "intimidation", ability: "cha", proficient: false },
  { name: "investigation", ability: "int", proficient: false },
  { name: "medicine", ability: "wis", proficient: false },
  { name: "nature", ability: "int", proficient: false },
  { name: "perception", ability: "wis", proficient: false },
  { name: "performance", ability: "cha", proficient: false },
  { name: "persuasion", ability: "cha", proficient: false },
  { name: "religion", ability: "int", proficient: false },
  { name: "sleight of hand", ability: "dex", proficient: false },
  { name: "stealth", ability: "dex", proficient: false },
  { name: "survival", ability: "wis", proficient: false }
];

const initialState = {
  //   skillsList: initialSkillsList,
  acrobatics: {
    skillName: "acrobatics",
    ability: "dex",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  animal: {
    skillName: "animal handling",
    ability: "wis",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  arcana: {
    skillName: "arcana",
    ability: "int",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  athletics: {
    skillName: "athletics",
    ability: "str",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  deception: {
    skillName: "deception",
    ability: "cha",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  history: {
    skillName: "history",
    ability: "int",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  insight: {
    skillName: "insight",
    ability: "wis",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  intimidation: {
    skillName: "intimidation",
    ability: "cha",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  investigation: {
    skillName: "investigation",
    ability: "int",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  medicine: {
    skillName: "medicine",
    ability: "wis",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  nature: {
    skillName: "nature",
    ability: "int",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  perception: {
    skillName: "perception",
    ability: "wis",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  performance: {
    skillName: "performance",
    ability: "cha",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  persuasion: {
    skillName: "persuasion",
    ability: "cha",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  religion: {
    skillName: "religion",
    ability: "int",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  sleight: {
    skillName: "sleight of hand",
    ability: "dex",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  stealth: {
    skillName: "stealth",
    ability: "dex",
    proficiency: "not-proficient",
    totalBonus: 0
  },
  survival: {
    skillName: "survival",
    ability: "wis",
    proficiency: "not-proficient",
    totalBonus: 0
  }
};

const skillsReducer = (skillsState = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SKILL":
      const { skillName, ability, proficiency, totalBonus } = action.skill;
      const firstWord = skillName.split(" ")[0];
      return {
        ...skillsState,
        [`${firstWord}`]: {
          skillName,
          ability,
          proficiency,
          totalBonus
        }
      };

    default:
      return skillsState;
  }
};

export default skillsReducer;
// acrobatics: { mod: "dex", bonus: 0 },
// animal handling: { mod: "wis", bonus: 0 },
// arcana: { mod: "int", bonus: 0 },
// athletics: { mod: "str", bonus: 0 },
// deception: { mod: "cha", bonus: 0 },
// history: { mod: "int", bonus: 0 },
// insight: { mod: "wis", bonus: 0 },
// intimidation: { mod: "cha", bonus: 0 },
// investigation: { mod: "int", bonus: 0 },
// medicine: { mod: "wis", bonus: 0 },
// nature: { mod: "int", bonus: 0 },
// perception: { mod: "wis", bonus: 0 },
// performance: { mod: "cha", bonus: 0 },
// persuasion: { mod: "cha", bonus: 0 },
// religion: { mod: "int", bonus: 0 },
// sleight of hand: { mod: "dex", bonus: 0 },
// stealth: { mod: "dex", bonus: 0 },
// survival: { mod: "wis", bonus: 0 }

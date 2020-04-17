export function toggleInspiration() {
  return {
    type: "TOGGLE_INSPIRATION",
  };
}

export function setTempHP(tempHP) {
  return {
    type: "SET_TEMP_HP",
    tempHP,
  };
}

export function setCurHP(curHP) {
  return {
    type: "SET_CUR_HP",
    curHP,
  };
}

export function changeHP(amount) {
  return {
    type: "CHANGE_HP",
    amount,
  };
}

export function setArmorClass(armorClass) {
  return {
    type: "SET_ARMOR_CLASS",
    armorClass,
  };
}

const initialState = {
  inspiration: false,
  conditions: ["none"],
  buffs: [],
  debuffs: [],
  curHP: 21,
  maxHP: 26,
  tempHP: 8,
  armorClass: 10,
};

const statusReducer = (statusState = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_INSPIRATION":
      return {
        ...statusState,
        inspiration: !statusState.inspiration,
      };
    case "SET_TEMP_HP":
      return {
        ...statusState,
        tempHP: action.tempHP,
      };
    case "SET_CUR_HP":
      return {
        ...statusState,
        curHP: action.curHP,
      };
    case "CHANGE_HP":
      if (statusState.curHP + action.amount > statusState.maxHP) {
        return {
          ...statusState,
          curHP: statusState.maxHP,
        };
      } else {
        return {
          ...statusState,
          curHP: statusState.curHP + action.amount,
        };
      }
    case "SET_ARMOR_CLASS":
      return {
        ...statusState,
        armorClass: action.armorClass,
      };
    default:
      return statusState;
  }
};

export default statusReducer;

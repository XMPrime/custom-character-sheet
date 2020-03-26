import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ability from "./Ability";
import {
  setAbilityScore,
  toggleEdit,
  setPrevId
} from "../reducers/abilityScoresReducer";

export default function AbilityScores() {
  const {
    prevId,
    str,
    dex,
    con,
    int,
    wis,
    cha,
    strMod,
    dexMod,
    conMod,
    intMod,
    wisMod,
    chaMod
  } = useSelector(state => state.abilityScores);
  const dispatch = useDispatch();

  // function setPrevId(id) {
  //   prevId = id;
  // }

  function clearOnFocus(e) {
    const targetId = e.target.id;
    const curElement = document.getElementById(targetId);
    if (document.activeElement === curElement) {
      dispatch(setPrevId(targetId));
      curElement.value = "";
    }
  }

  useEffect(() => {
    document.addEventListener("click", e => clearOnFocus(e));
  }, []);

  return (
    <div className="abilities">
      <Ability
        id="str"
        name="strength"
        score={str}
        abilityMod={strMod}
      ></Ability>
      <Ability
        id="dex"
        name="dexterity"
        score={dex}
        abilityMod={dexMod}
      ></Ability>
      <Ability
        id="con"
        name="constitution"
        score={con}
        abilityMod={conMod}
      ></Ability>
      <Ability
        id="int"
        name="intelligence"
        score={int}
        abilityMod={intMod}
      ></Ability>
      <Ability id="wis" name="wisdom" score={wis} abilityMod={wisMod}></Ability>
      <Ability
        id="cha"
        name="charisma"
        score={cha}
        abilityMod={chaMod}
      ></Ability>
    </div>
  );
}

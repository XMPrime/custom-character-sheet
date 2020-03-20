import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ability from "./Ability";
import {
  setAbilityScore,
  toggleEdit,
  setPrevId
} from "../reducers/abilityScoresReducer";

export default function AbilityScores() {
  const { prevId, str, dex, con, int, wis, cha } = useSelector(
    state => state.abilityScores
  );
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
    <div>
      <Ability id="str" name="strength" score={str}></Ability>
      <Ability id="dex" name="dexterity" score={dex}></Ability>
      <Ability id="con" name="constitution" score={con}></Ability>
      <Ability id="int" name="intelligence" score={int}></Ability>
      <Ability id="wis" name="wisdom" score={wis}></Ability>
      <Ability id="cha" name="charisma" score={cha}></Ability>
    </div>
  );
}

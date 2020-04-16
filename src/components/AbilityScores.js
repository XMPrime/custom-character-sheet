import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ability from "./Ability";
import { setPrevId } from "../reducers/generalReducer";

export default function AbilityScores() {
  const { str, dex, con, int, wis, cha } = useSelector(
    (state) => state.abilityScores
  );
  const dispatch = useDispatch();
  const raceBonuses = useSelector(
    (state) => state.characterCreation.raceBonuses
  );

  function clearOnFocus(e) {
    const targetId = e.target.id;
    const curElement = document.getElementById(targetId);
    if (document.activeElement === curElement) {
      dispatch(setPrevId(targetId));
      curElement.value = "";
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => clearOnFocus(e));
  }, []);

  return (
    <div className="abilities row">
      <Ability id="str" name="strength" score={str}></Ability>
      <Ability id="dex" name="dexterity" score={dex}></Ability>
      <Ability id="con" name="constitution" score={con}></Ability>
      <Ability id="int" name="intelligence" score={int}></Ability>
      <Ability id="wis" name="wisdom" score={wis}></Ability>
      <Ability id="cha" name="charisma" score={cha}></Ability>
    </div>
  );
}

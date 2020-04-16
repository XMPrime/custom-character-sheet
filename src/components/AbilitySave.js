import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifierCalc, calcTotalBonus } from "../js/utils";
import { toggleSaveProf } from "../reducers/savingThrowsReducer";

export default function AbilitySave(props) {
  const abilityMod = modifierCalc(props.score);
  const dispatch = useDispatch();
  const proficiency = useSelector(state => state.savingThrows[props.name]);
  const totalBonus = abilityMod + (proficiency ? 2 : 0);

  return (
    <div className="ability-save">
      <div
        className="proficiency-radial"
        onClick={e => {
          dispatch(toggleSaveProf(props.name));
        }}
      >
        <div
          className={`proficiency-radial--${
            proficiency ? "proficient" : "not-proficient"
          }`}
        ></div>
      </div>
      <div className="ability-save__label">{props.name.toUpperCase()}</div>
      <div className="ability-save__value">
        {totalBonus >= 0 ? "+" : ""}
        {totalBonus}
      </div>
    </div>
  );
}

{
  /* <ProficiencyRadial /> */
}

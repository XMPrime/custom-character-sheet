import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifierCalc, calcTotalBonus } from "../js/utils";
import { toggleSaveProf } from "../reducers/savingThrowsReducer";

export default function SavingThrow(props) {
  const abilityMod = modifierCalc(props.score);
  const dispatch = useDispatch();
  const proficiency = useSelector((state) => state.savingThrows[props.name]);
  const totalBonus = abilityMod + (proficiency ? 2 : 0);

  return (
    <div className='saving-throw'>
      <div className='saving-throw__prof'>
        <div
          className='proficiency-radial'
          onClick={(e) => {
            dispatch(toggleSaveProf(props.name));
          }}
        >
          <div
            className={`proficiency-radial--${
              proficiency ? "proficient" : "not-proficient"
            }`}
          ></div>
        </div>
      </div>

      <div className='saving-throw__name'>{props.name.toUpperCase()}</div>
      <div className='saving-throw__bonus'>
        {totalBonus >= 0 ? "+" : ""}
        {totalBonus}
      </div>
    </div>
  );
}

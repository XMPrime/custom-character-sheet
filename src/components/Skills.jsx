import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Skill from "./Skill";

export default function Skills() {
  const dispatch = useDispatch();
  const { strMod, dexMod, conMod, intMod, wisMod, chaMod } = useSelector(
    (state) => state.abilityScores
  );
  const skillsList = Object.entries(useSelector((state) => state.skills)).map(
    (skill) => {
      let abilityMod;
      switch (skill.ability) {
        case "str":
          abilityMod = strMod;
          break;
        case "dex":
          abilityMod = dexMod;
          break;
        case "con":
          abilityMod = conMod;
          break;
        case "int":
          abilityMod = intMod;
          break;
        case "wis":
          abilityMod = wisMod;
          break;
        case "cha":
          abilityMod = chaMod;
          break;
        default:
          abilityMod = 0;
          break;
      }
      return (
        <Skill
          key={skill[1].skillName}
          skillName={skill[0]}
          skillAbility={skill[1].ability}
          abilityMod={abilityMod}
        />
      );
    }
  );
  return (
    <div id='skills' className='skills'>
      <div className='skills__title label--lg'>skills</div>
      <div className='skills__header'>
        <div className='skills__title--prof label'>prof</div>
        <div className='skills__title--mod label'>mod</div>
        <div className='skills__title--name label'>skill</div>
        <div className='skills__title--bonus label'>bonus</div>
      </div>
      {skillsList}
    </div>
  );
}

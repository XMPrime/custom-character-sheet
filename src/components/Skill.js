import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProficiencyRadial from "./ProficiencyRadial";
import { updateBonus } from "../reducers/skillsReducer";
import { calcTotalBonus } from "../js/utils";

export default function Skill(props) {
  const dispatch = useDispatch();
  const abilityMod = useSelector(
    state => state.abilityScores[`${props.skillAbility}Mod`]
  );
  const { skillAbility, skillName } = props;

  return (
    <div className="skill">
      <ProficiencyRadial
        skillName={skillName}
        skillMod={props.skillMod}
        abilityMod={abilityMod}
        calcTotalBonus={calcTotalBonus}
        dispatch={dispatch}
      />
      <div className="skill__mod">{skillAbility}</div>
      <div className="skill__name">{skillName}</div>
      <div className="skill__bonus">
        {abilityMod >= 0 ? "+" : ""}
        {calcTotalBonus(2, skillName, abilityMod)}
      </div>
    </div>
  );
}

// import React, { Component } from "react";

// export default class Skill extends Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//     this.state = {
//       skillName: props.skillName,
//       proficiency: "not-proficient",
//       abilityMod: props.abilityMod,
//       bonus: props.abilityMod
//     };
//     this.calcTotalBonus = this.calcTotalBonus.bind(this);
//   }
//   calcTotalBonus(profBonus = 2, proficiency, abilityMod) {
//     // const targetRadial = document.getElementById(`${props.skillName}-radial`);
//     // if (targetRadial !== null) {
//     //   proficiency = targetRadial.attributes.proficiency.value;
//     //   console.log(proficiency);
//     // }
//     console.log(abilityMod);
//     switch (proficiency) {
//       case "proficient":
//         proficiency = 2;
//         break;
//       case "not-proficient":
//         proficiency = 1;
//         break;
//       default:
//         proficiency = 0;
//         break;
//     }
//     // const totalBonus = (profBonus, proficiency, abilityMod);
//     // return totalBonus;
//     const totalBonus = profBonus * proficiency + abilityMod;
//     this.setState({ bonus: totalBonus });
//   }

//   render() {
//     const { skillName, skillMod, abilityMod, bonus } = this.state;
//     return (
//       <div className="skill">
//         <ProficiencyRadial
//           skillName={skillName}
//           skillMod={skillMod}
//           abilityMod={abilityMod}
//           calcTotalBonus={this.calcTotalBonus}
//         />
//         <div className="skill__mod">{skillMod}</div>
//         <div className="skill__name">{skillName}</div>
//         <div className="skill__bonus">
//           {bonus >= 0 ? "+" : ""}
//           {bonus}
//         </div>
//       </div>
//     );
//   }
// }

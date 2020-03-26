// import React, { Component } from "react";
// import {useDispatch, useSelector} from 'react-redux'

// export default class ProficiencyRadial extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { skillName: props.skillName, proficiency: "not-proficient" };
//     this.proficiencyToggle = this.proficiencyToggle.bind(this);
//   }

//   proficiencyToggle(e, dispatch) {
//     e.preventDefault();
//     const currentState = this.state;
//     console.log(currentState.skillName);
//     switch (currentState.proficiency) {
//       case "expertise":
//         this.setState({ proficiency: "not-proficient" });
//         break;
//       case "proficient":
//         this.setState({ proficiency: "expertise" });
//         break;
//       default:
//         this.setState({ proficiency: "proficient" });
//         break;
//     }
//   }
//   render() {
//     const { calcTotalBonus, abilityMod, dispatch } = this.props;
//     const { skillName, skillMod, proficiency } = this.state;
//     return (
//       <div className="skill__prof">
//         <div
//           id={`${skillName}-radial`}
//           className="proficiency-radial"
//           proficiency={proficiency}
//           onClick={e => {
//             this.proficiencyToggle(e, dispatch);
//           }}
//         >
//           <div className={`proficiency-radial--${proficiency}`}></div>
//           {proficiency === "expertise" ? (
//             <div className="expertise"></div>
//           ) : null}
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSkill } from "../reducers/skillsReducer";
import { calcTotalBonus } from "../js/utils";

export default function ProficiencyRadial(props) {
  const dispatch = useDispatch();
  //   const { skillName, abilityMod, proficiency } = props;
  const firstWord = props.skillName.split(" ")[0];
  const skillState = useSelector(state => state.skills[`${firstWord}`]);

  function proficiencyToggle(e, skillState) {
    e.preventDefault();
    switch (skillState.proficiency) {
      case "expertise":
        dispatch(updateSkill({ ...skillState, proficiency: "not-proficient" }));
        break;
      case "proficient":
        dispatch(updateSkill({ ...skillState, proficiency: "expertise" }));
        break;
      default:
        dispatch(updateSkill({ ...skillState, proficiency: "proficient" }));
        break;
    }
  }
  return (
    <div className="skill__prof">
      <div
        id={`${skillState.skillName}-radial`}
        className="proficiency-radial"
        proficiency={skillState.proficiency}
        onClick={e => {
          proficiencyToggle(e, skillState);
        }}
      >
        <div className={`proficiency-radial--${skillState.proficiency}`}></div>
        {skillState.proficiency === "expertise" ? (
          <div className="expertise"></div>
        ) : null}
      </div>
    </div>
  );
}

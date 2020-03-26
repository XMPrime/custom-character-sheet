export function modifierCalc(score) {
  const modifierCalc = (score - 10) / 2;
  return modifierCalc >= 0 ? Math.ceil(modifierCalc) : Math.floor(modifierCalc);
}

export function calcTotalBonus(profBonus = 2, proficiency, abilityMod) {
  // const targetRadial = document.getElementById(`${props.skillName}-radial`);
  // if (targetRadial !== null) {
  //   proficiency = targetRadial.attributes.proficiency.value;
  //   console.log(proficiency);
  // }

  // console.log(skillName);
  // let proficiency = document.getElementById(`${skillName}-radial`).attributes
  //   .proficiency.value;
  // console.log(proficiency);

  // switch (proficiency) {
  //   case "expertise":
  //     proficiency = 2;
  //     break;
  //   case "proficient":
  //     proficiency = 1;
  //     break;
  //   default:
  //     proficiency = 0;
  //     break;
  // }
  // const totalBonus = (profBonus, proficiency, abilityMod);
  // return totalBonus;
  return profBonus * proficiency + abilityMod;
}

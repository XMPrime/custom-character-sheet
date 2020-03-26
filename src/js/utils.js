export function modifierCalc(score) {
  return Math.floor((score - 10) / 2);
}

export function calcTotalBonus(profBonus = 2, proficiency = 0, abilityMod = 0) {
  switch (proficiency) {
    case "expertise":
      proficiency = 2;
      break;
    case "proficient":
      proficiency = 1;
      break;
    default:
      proficiency = 0;
      break;
  }
  return profBonus * proficiency + abilityMod;
}

import React from "react";
import { useSelector } from "react-redux";
import AbilitySave from "./AbilitySave";

export default function SavingThrows() {
  const savingThrows = Object.entries(
    useSelector(state => state.abilityScores)
  ).map(ability => {
    return <AbilitySave name={ability[0]} score={ability[1]} />;
  });
  return <div className="saving-throws">{savingThrows}</div>;
}

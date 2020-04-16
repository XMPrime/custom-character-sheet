import React from "react";
import { useSelector } from "react-redux";
import { modifierCalc } from "../js/utils";

export default function Initiative() {
  const dexMod = modifierCalc(useSelector((state) => state.abilityScores.dex));
  return (
    <div className="initiative border-bg">
      <div className="initiative__text label">initiative</div>
      <div className="initiative__number number--lg">+{dexMod}</div>
    </div>
  );
}

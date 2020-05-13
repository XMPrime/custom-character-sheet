import React from "react";
import { useSelector } from "react-redux";
import SavingThrow from "./SavingThrow";

export default function SavingThrows() {
  const { str, dex, con, int, wis, cha } = useSelector(
    (state) => state.abilityScores
  );
  const savingThrowList = [
    ["strength", str],
    ["dexterity", dex],
    ["constitution", con],
    ["intelligence", int],
    ["widsom", wis],
    ["charisma", cha],
  ];

  const savingThrows = savingThrowList.map((ability) => {
    return <SavingThrow name={ability[0]} score={ability[1]} />;
  });

  return (
    <div id='saving-throws border-bg' className='saving-throws bg-background'>
      <div className='saving-throws__title label--lg'>saving throws</div>
      <div className='saving-throws__header'>
        <div className='saving-throws__title--prof label'>prof</div>
        <div className='saving-throws__title--name label'>ability</div>
        <div className='saving-throws__title--bonus label'>bonus</div>
      </div>
      {savingThrows}
      {/* <div className='saving-throw__wrapper'>{savingThrows}</div> */}
    </div>
  );
}

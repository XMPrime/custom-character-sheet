import React, { Component } from "react";

import AbilityScores from "./components/AbilityScores";
import Skills from "./components/Skills";
import CharacterCreation from "./components/CharacterCreation";

export default function App() {
  return (
    <div className="app">
      <AbilityScores /> <Skills /> <CharacterCreation />
    </div>
  );
}

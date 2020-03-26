import React, { Component } from "react";

import AbilityScores from "./components/AbilityScores";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="app">
      <AbilityScores /> <Skills />
    </div>
  );
}

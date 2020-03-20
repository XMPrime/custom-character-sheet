import React, { Component } from "react";

export default class ProficiencyRadial extends Component {
  constructor(props) {
    super(props);
    this.state = { proficiency: "not-proficient" };
    this.proficiencyToggle = this.proficiencyToggle.bind(this);
  }

  proficiencyToggle(e) {
    console.log("test");
    e.preventDefault();
    const currentState = this.state;
    switch (currentState.proficiency) {
      case "expertise":
        this.setState({ proficiency: "not-proficient" });
        break;
      case "proficient":
        this.setState({ proficiency: "expertise" });
        break;
      default:
        this.setState({ proficiency: "proficient" });
        break;
    }
  }
  render() {
    // const { level_4_id, level_1_id, isHeader, level, text } = this.props;
    return (
      <div
        className="proficiency-radial--container"
        proficiency={this.state.grade}
        onClick={this.proficiencyToggle}
      >
        <div className={`proficiency-radial--${this.state.proficiency}`}></div>
        {this.state.proficiency === "expertise" ? (
          <div className="expertise"></div>
        ) : null}
      </div>
    );
  }
}

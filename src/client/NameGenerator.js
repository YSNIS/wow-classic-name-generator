import React from "react";
import classes from "./classes";
import races from "./races";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {
        class: classes[0],
        race: races[0],
        gender: "Male"
      },
      isGenerated: false
    };
    this.handleClassClick = this.handleClassClick.bind(this);
    this.handleRaceClick = this.handleRaceClick.bind(this);
    this.handleGenderClick = this.handleGenderClick.bind(this);
    this.handleGenerateName = this.handleGenerateName.bind(this);
  }

  handleClassClick(e) {
    this.setState({
      isGenerated: false,
      selected: {
        class: e.target.id,
        race: this.state.selected.race,
        gender: this.state.selected.gender
      }
    });
  }

  handleRaceClick(e) {
    this.setState({
      isGenerated: false,
      selected: {
        class: this.state.selected.class,
        race: e.target.id,
        gender: this.state.selected.gender
      }
    });
  }

  handleGenderClick(e) {
    const gender = this.state.selected.gender === "Male" ? "Female" : "Male";
    this.setState({
      isGenerated: false,
      selected: {
        class: this.state.selected.class,
        race: this.state.selected.race,
        gender: gender
      }
    });
  }

  handleGenerateName(e) {
    this.setState({
      isGenerated: true
    });
  }

  render() {
    const selectedClass = this.state.selected.class;
    const selectedRace = this.state.selected.race;
    const gender = this.state.selected.gender;
    const handleClassClick = this.handleClassClick;
    const handleRaceClick = this.handleRaceClick;
    const handleGenderClick = this.handleGenderClick;
    const handleGenerateName = this.handleGenerateName;

    return (
      <div>
        <div className="main">
          <div className="selections">
            <div className="gender">
              <img src="../images/gender.png" onClick={handleGenderClick} />
            </div>
            <div className="races icons">
              {races.map((name, index) => {
                return (
                  <img
                    key={index}
                    id={name}
                    className={selectedRace === name ? "selected" : ""}
                    src={`../images/${name}${gender}.png`}
                    onClick={handleRaceClick}
                  />
                );
              })}
            </div>
            <div className="classes icons">
              {classes.map((name, index) => {
                return (
                  <img
                    key={index}
                    id={name}
                    className={selectedClass === name ? "selected" : ""}
                    src={`../images/${name}.png`}
                    onClick={handleClassClick}
                  />
                );
              })}
            </div>
            <h1 className="generate" onClick={handleGenerateName}>
              GENERATE NAME
            </h1>
          </div>
        </div>
        {this.state.isGenerated ? (
          <p className="message">
            Congratulations! From now on you will be the{" "}
            {this.state.selected.gender} {this.state.selected.race}{" "}
            {this.state.selected.class} Thex!
          </p>
        ) : (
          <p className="message" />
        )}
      </div>
    );
  }
}

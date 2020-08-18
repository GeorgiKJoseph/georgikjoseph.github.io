import React, { Component } from "react";

class Skills extends Component {
  state = {
    tools: [
      "Django",
      "Selenium",
      "React",
      "Linux",
      "Git",
      "Flask",
      "Express.js",
      "SQLite",
      "MongoDB",
      "Firebase",
      "Kotlin for Android",
      "IOT",
    ],
  };
  render() {
    return (
      <div className="container skills-tools">
        {this.state.tools.map((tool) => (
          <span className="badge badge-pill m-2 badge-secondary">
            <b className="skills-text">{tool}</b>
          </span>
        ))}
      </div>
    );
  }
}

export default Skills;

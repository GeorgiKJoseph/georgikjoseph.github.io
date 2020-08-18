import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

class Programming extends Component {
  state = {
    languages: [
      { name: "Python", value: 100 },
      { name: "C/C++", value: 100 },
      { name: "Kotlin", value: 70 },
      { name: "NodeJS & JS", value: 70 },
      { name: "HTML & CSS", value: 60 },
      { name: "Java", value: 40 },
    ],
  };
  render() {
    return (
      <div className="container programming">
        <br></br>
        {this.state.languages.map((lang) => (
          <div className="row">
            <div className="col-sm-0 col-md-1"></div>
            <div className="col-sm-3 col-md-4">
              <span className="programming-text">{lang.name}</span>
            </div>
            <div className="col-sm-8 col-md-6">
              <ProgressBar variant="secondary" now={lang.value} />
            </div>
            <div className="col-sm-0 col-md-1"></div>
          </div>
        ))}
      </div>
    );
  }
}

export default Programming;

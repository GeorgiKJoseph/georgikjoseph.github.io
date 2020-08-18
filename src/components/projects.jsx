import React, { Component } from "react";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "E-Live",
        tools: ["Django", "SQLite", "Iot", "Arduino", "REST-API"],
        description:
          "E_live is a Django based Real-time webapp for home automation and monitoring",
      },
      {
        title: "PostIT",
        tools: ["Django", "WebShare API", "SQLite", "OAuth APIs"],
        description: "A tool to schedule posts to Twitter, Facebook ",
      },

      {
        title: "Automated-Grade-Entry-SATS",
        tools: ["Python", "Selenium"],
        description:
          "Python-Selenium bot to automate grade entry in Karnataka SATS portal",
      },
      {
        title: "QuickShare",
        tools: ["Django", "ReactJS", "SQLite"],
        description:
          "An app built on Django & ReactJs for quick sharing of text and documents locally between different platforms",
      },
      {
        title: "SnipShare",
        tools: ["Django", "SQLite", "Bootstrap"],
        description: "Django based webapp to share codes and snippets ",
      },
      {
        title: "JustChat",
        tools: ["Kotlin", "Firebase"],
        description:
          "Real-time chat application using Kotlin for android and Firebase ",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.projects.map((proj) => (
            <div className="col-lg-4 col-md-4 d-flex col-sm-12 p-3">
              <div class="card card-deck">
                <div class="card-body d-flex flex-column">
                  <h4 class="card-title">{proj.title}</h4>

                  <hr></hr>
                  <p class="card-text">{proj.description}</p>
                  <div className="row mt-auto align-self-end">
                    <div className="col-sm-10">
                      {proj.tools.map((tool) => (
                        <span className="badge badge-pill m-1 badge-light project-pill">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="col-sm-2">
                      <a
                        href="#"
                        class="card-link d-flex align-items-baseline icon-style float-right m-1"
                      >
                        <i class="fa fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <div className="container d-flex justify-content-center">
          <span className="more-projects">
            &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
            &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <a
              className="more-proj-link"
              href="https://github.com/GeorgiKJoseph?tab=repositories"
            >
              More Projects
            </a>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
          </span>
        </div>
      </div>
    );
  }
}

export default Projects;

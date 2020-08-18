import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import Skills from "./components/skills";
import Programming from "./components/programming";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12">
            <div className="visible-lg social-links">
              <span>
                <a
                  href="https://github.com/georgikjoseph"
                  class="fa fa-github fa-lg social-link-icons"
                  aria-hidden="true"
                ></a>
                <a
                  href="https://www.instagram.com/georgikjoseph/"
                  class="fa fa-instagram fa-lg social-link-icons"
                  aria-hidden="true"
                ></a>
                <a
                  href="https://twitter.com/GeorgiKJoseph2"
                  class="fa fa-twitter fa-lg social-link-icons"
                  aria-hidden="true"
                ></a>
                <a
                  href="https://www.linkedin.com/in/georgi-k-joseph-6770891b5/"
                  class="fa fa-linkedin fa-lg social-link-icons"
                  aria-hidden="true"
                ></a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="container intro">
              <h5 className="text-secondary">Hi, I am </h5>
              <h1>Georgi K Joseph</h1>
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <p>
                    Currently pursuing B-Tech at College of Engineering
                    Chengannur. I love technology and enjoy making things. I
                    make my own tools whenever I fail to find one.
                  </p>
                </div>
              </div>

              <a
                href="mailto:georgikjoseph@gamil.com"
                className="btn get-in-touch"
              >
                <span className="get-in-touch-text">Get In Touch</span>
              </a>
            </div>

            <div className="container skills">
              <h3>Skills and Tools</h3>
              <hr></hr>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <br></br>
                  <Skills />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <Programming />
                </div>
              </div>
            </div>

            <div className="container projects">
              <h3>Projects</h3>
              <hr></hr>
              <Projects />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12">
            <div className="visible-lg email-link">
              <span className="email-link-text">
                <a className="email-link-id">georgikjoseph@gmail.com</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
              </span>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <footer class="page-footer foot p-2">
        <div class="footer-copyright text-center text-dark py-3">
          <p>Designed and Built by Georgi K Joseph</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

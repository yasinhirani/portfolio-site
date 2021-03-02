import React from "react";
import html from "./skills/html-5.svg";
import css from "./skills/css.svg";
import javascript from "./skills/javascript.svg";
import react from "./skills/react.svg";
import bootstrap from "./skills/bootstrap.svg";
import sass from "./skills/sass.svg";
import git from "./skills/git.svg";
import linux from "./skills/linux.svg";
import vscode from "./skills/vs code.svg";

const Skills = () => {
  return (
    <>
      <div className="skills mt-5">
        <h1>My Skills</h1>
        <hr />
        <h2>Languages known:</h2>
        <div className="language-list mt-4">
          <ol className="list-unstyled">
            <li>
              <img className="skills-img" src={html} alt="Html-5" />
              <span className="ml-3 font-weight-bold">HTML 5</span>
            </li>
            <li>
              <img className="skills-img mt-3" src={css} alt="CSS" />
              <span className="ml-3 mt-3 font-weight-bold">CSS 3</span>
            </li>
            <li>
              <img
                className="skills-img mt-3"
                src={javascript}
                alt="Javascript"
              />
              <span className="ml-3 mt-3 font-weight-bold">Javascript</span>
            </li>
          </ol>
        </div>
        <hr />
        <h2>Technologies known:</h2>
        <div className="technology-list mt-4">
          <ol className="list-unstyled">
            <li>
              <img className="skills-img" src={react} alt="React" />
              <span className="ml-3 mt-3 font-weight-bold">React</span>
            </li>
            <li>
              <img
                className="skills-img mt-3"
                src={bootstrap}
                alt="Bootstarp"
              />
              <span className="ml-3 mt-3 font-weight-bold">Bootstarp</span>
            </li>
            <li>
              <img className="skills-img mt-3" src={sass} alt="SASS" />
              <span className="ml-3 mt-3 font-weight-bold">SASS</span>
            </li>
          </ol>
        </div>
        <hr />
        <h2>Other Platforms:</h2>
        <div className="paltforms-list mt-4">
          <ol className="list-unstyled">
            <li>
              <img className="skills-img" src={linux} alt="linux" />
              <span className="ml-3 font-weight-bold">linux</span>
            </li>
            <li>
              <img
                className="skills-img mt-3"
                src={git}
                alt="git"
              />
              <span className="ml-3 font-weight-bold">git</span>
            </li>
            <li>
              <img className="skills-img mt-3" src={vscode} alt="vs code" />
              <span className="ml-3  font-weight-bold">vs code</span>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};
export default Skills;

import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import "./App.css";
import Footer from './Footer';

const Projects = () => {
  return (
    <>
      <div className="mt-3 mb-4">
        <h1 className="text-center main-project">My <span id="project-color">Projects</span></h1>
      </div>
      <div className="container-fluid col-10">
        <div className="row">
          <div className="mx-auto">
            <div className="row gy-5">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} btntitle={val.btnvisit} content={val.content}
                btnlive={val.btnlive} linkgithub={val.linkgithub} linklive={val.linklive}/>;
              })}
              <div className="d-flex justify-content-center"><a className="btn btn-outline-primary btn-see-all" href="https://github.com/yasinhirani" rel="noreferrer" target="_blank">See all projects here</a></div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};
export default Projects;

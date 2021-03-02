import React from "react";
import "./App.css";
import web from "./assets/main-image.svg";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <section
        id="header"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="mx-auto">
              <div className="row">
                <div className="text-main col-7 p-1 p-lg-0 order-2 order-lg-1 d-flex justify-content-center align-items-center flex-column">
                  <h1>
                    Hi, I am <span id="my-name">Yasin Hirani</span>
                  </h1>
                  <h2 className="my-1 mb-5">Frontend Web Developer</h2>
                  <div>
                    <NavLink className="mt-5" id="btn-about" to="/about">
                      About me
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-4 order-1 order-lg-2">
                  <img className="side-img" src={web} alt="Home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;

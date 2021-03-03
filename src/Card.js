import React from "react";
import "./App.css";

const Card = props => {
  return (
    <>
      <div className="col-md-5 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <a href={props.linkgithub} rel="noreferrer" target="_blank" className="btn btn-outline-primary">
              {props.btntitle}
            </a>
            <a href={props.linklive} rel="noreferrer" target="_blank" className="btn btn-outline-primary float-right">
              {props.btnlive}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

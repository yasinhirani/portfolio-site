import React from "react";
import "./App.css";

const Card = props => {
  return (
    <>
      <div className="col-md-5 mx-auto">
        <div class="card">
          <img src={props.imgsrc} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.content}</p>
            <a href={props.linkgithub} rel="noreferrer" target="_blank" class="btn btn-outline-primary">
              {props.btntitle}
            </a>
            <a href={props.linklive} rel="noreferrer" target="_blank" class="btn btn-outline-primary float-right">
              {props.btnlive}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

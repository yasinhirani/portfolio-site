import React from "react";
import './App.css';
import github from '../src/footer icons/github.svg';
import linkedin from '../src/footer icons/linkedin.svg';
import twitter from '../src/footer icons/twitter.svg';
import mail from '../src/footer icons/mail.svg';

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <div
        className="text-center p-3 mt-5 main-footer"
      >
        <p className="font-weight-bold mb-0">© {year}: Yasin Hirani</p>
        <div className="icons">
        <a href="mailto:hiraniyasin3854@gmail.com" rel="noreferrer" target="_blank"><img className="footer-icons ml-4" src={mail} alt="github"/></a>
        <a href="https://github.com/yasinhirani" rel="noreferrer" target="_blank"><img className="footer-icons" src={github} alt="linkedin"/></a>
        <a href="https://www.linkedin.com/in/yasin-hirani-9832a418a/" rel="noreferrer" target="_blank"><img className="footer-icons" src={linkedin} alt="instagram"/></a>
        <a href="https://twitter.com/HiraniYasin" rel="noreferrer" target="_blank"><img className="footer-icons" src={twitter} alt="instagram"/></a>
      </div>
      </div>
    </>
  );
};
export default Footer;

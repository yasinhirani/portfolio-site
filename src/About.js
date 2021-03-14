import React, {useEffect} from "react";
import ReactToolTip from 'react-tooltip';
import "./App.css";
import Image from "./Image";
import Skills from './Skills';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {

  const copyEmail = () =>{
    const myEmail = document.getElementById('my-email');
    const textArea = document.createElement('textarea');
    textArea.value = myEmail.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    toast('Copied...', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  useEffect(() => {
    document.title="About me";
  })

  return (
    <>
      <div className="container-fluid col-10">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="about">
                <h1 className="mt-4 font-weight-bold text-center">About</h1>
                <Image />
              </div>
              <div className="about-me">
                  <h5>Hi, I am <span id="my-name">Yasin Hirani</span></h5>
                  <p>I have completed BCA(Bachelor in Computer Application) from SSR college affilated to Savritribai Phule Pune University.
                    Besides that I am a self-taught Front-end web developer.</p>
                  <p>I love to explore new things in computers. I enjoy solving problems.</p>
                  <p>I love learning new Languages and new new stuffs in computers. I am very passionate about learning things.</p>
                  <p>In my free time, Apart from learning web development, I love to watch south indian movies based on action and Romance.</p>
                  <p>Feel free to contact me at: <span onClick={copyEmail} data-tip="click to copy" id="my-email">hiraniyasin3854@gmail.com</span></p>
                  <ReactToolTip effect='solid' />
                  <ToastContainer />
                  <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;

import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function About() {
  const { data } = useContext(AppContext);
  return (
    <div className="about-main">
      <div className="about-content">
        <div className="about-left">
          <div className="upper-name">
            <div className="line-name-parent">
              <h5 className="name-line">___________</h5>
              <h5>{data.name}</h5>
            </div>
          </div>
          <h1 className="heading">
            {data.aboutTitle1} <br />
            {data.aboutTitle2}
          </h1>
          <p className="intro">{data.aboutDesc}</p>
          <div className="buttons">
            <div className="hire-button">
              <a className="whiteText" href="mailto:sucuogluegemen1@gmail.com">
                Contact!
              </a>
            </div>

            <div className="github-button">
              <img src="github.png" alt="github" />{" "}
              <a href="https://github.com/EgemenSucuoglu" target="_blank">
                Github
              </a>
            </div>
            <div className="linkedin-button">
              <img src="LinkedIn.png" alt="linkedin" />
              <a
                href="https://www.linkedin.com/in/egemen-sucuo%C4%9Flu-234409265/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <img className="bio-image" src="EgemenFoto.jpg" alt="profile" />
      </div>
    </div>
  );
}

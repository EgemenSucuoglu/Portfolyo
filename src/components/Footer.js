import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Footer() {
  const { data } = useContext(AppContext);
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerCol">
          <h2 className="lets">{data.footerTitle1 + data.footerTitle2}</h2>
          <div className="footerInfo">
            <a href="mailto:sucuogluegemen1@gmail.com" className="mail">
              👉 sucuogluegemen1@gmail.com
            </a>

            <div className="links-footer">
              <a
                href="https://github.com/EgemenSucuoglu"
                className="githubFooter"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/egemen-sucuo%C4%9Flu-234409265/"
                className="linkedinFooter"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

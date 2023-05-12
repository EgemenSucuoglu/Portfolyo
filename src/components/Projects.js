import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Projects() {
  const { data } = useContext(AppContext);
  return (
    <div id="projects" className="projectsContainer">
      <div className="projects">
        <div className="projectCol">
          <h1 className="profile-heading">{data.headerProjects}</h1>
          <div className="cards">
            <div className="card">
              <img src="calculator.png" alt="projects" />
              <h3 className="content-heading">{data.projectsCalculator}</h3>
              <p className="description-project">
                {data.projectsCalculatorDesc}
              </p>
              <div className="programs">
                <p>#react</p>
                <p>#redux</p>
                <p>#axios</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/EgemenSucuoglu/fsweb-s10g1-reducer-calculator"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href="https://my-repository-ten-nu.vercel.app/"
                  target="_blank"
                >
                  {data.projectVisit}
                </a>
              </div>
            </div>
            <div className="card">
              <img src="twitter.png" alt="projects" />
              <h3 className="content-heading">{data.projectsTwitter}</h3>
              <p className="description-project">{data.projectsTwitterDesc}</p>
              <div className="programs">
                <p>#react</p>
                <p>#redux</p>
                <p>#axios</p>
              </div>
              <div className="links">
                <a
                  href="https://github.com/EgemenSucuoglu/Twitter-on-90-s"
                  target="_blank"
                >
                  Github
                </a>
                <a href="https://twitter-on-90s.vercel.app/" target="_blank">
                  {data.projectVisit}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

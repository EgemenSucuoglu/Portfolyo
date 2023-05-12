import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Skills() {
  const { data } = useContext(AppContext);
  return (
    <div className="skillsContainer">
      <div className="skills">
        <div className="skill-heading">
          <div>
            <h3 className="heading-list">{data.headerSkills}</h3>
          </div>
          <div className="skill-list">
            <div className="js">
              <h3>JavaScript</h3>
              <p>{data.skillsDesc1}</p>
            </div>
            <div className="react">
              {" "}
              <h3>React.Js</h3>
              <p>{data.skillsDesc2}</p>
            </div>
            <div className="node">
              {" "}
              <h3>Node.Js</h3>
              <p>{data.skillsDesc3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

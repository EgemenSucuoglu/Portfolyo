import React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Profile() {
  const { data } = useContext(AppContext);
  return (
    <div className="profileContainer">
      <div className="profile">
        <div className="profile-infoCol">
          <h1 className="profile-heading">{data.profileTitle}</h1>
          <div></div>
          <div className="profile-infoText">
            <div className="profile-box">
              <div className="right">
                <h3 className="content-heading">{data.profileTitle}</h3>
                <div className="two-part">
                  <div className="keys">
                    <p>{data.profileBirth}</p>
                    <p>{data.profileLocation}</p>
                    <p>{data.profileEducation}</p>
                    <br /> <br />
                    <p>{data.profilePosition}</p>
                  </div>
                  <div className="values">
                    {" "}
                    <p>{data.birthDate}</p>
                    <p>{data.location}</p>
                    <p>{data.education}</p>
                    <br /> <br />
                    <p>{data.position}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-box">
              <h3 className="content-heading">{data.aboutTitle}</h3>
              <p>{data.about}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

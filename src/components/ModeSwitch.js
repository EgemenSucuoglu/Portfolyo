import { useState } from "react";
import { useContext } from "react";

import { AppContext } from "./AppContext";

export default function ModeSwitch() {
  const [darkMode, setDarkMode] = useState(false);
  const { data, tr, setTr } = useContext(AppContext);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguage = () => {
    setTr(!tr);
  };

  return (
    <div>
      <div className="modeSwitch">
        <div className="mode">
          <label className="toggle-switch">
            <input
              type="checkbox"
              className="toggle-switch-checkbox"
              onChange={handleToggle}
              checked={darkMode}
            />
            <span className="slider round"></span>
          </label>
          <div className="modeText">
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
          </div>
          <div className="modeText">|</div>
          <div className="modeText">
            <span onClick={handleLanguage} id="lang">
              {data.language}
            </span>
            {data.languageEk}
          </div>
        </div>
      </div>
    </div>
  );
}

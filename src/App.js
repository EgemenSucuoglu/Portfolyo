import "./App.css";
import "./components/About.css";
import "./components/Footer.css";
import "./components/Projects.css";
import "./components/Profile.css";
import "./components/Skills.css";
import "./components/Header.css";
import "./components/ModeSwitch.css";
import Header from "./components/Header";
import About from "./components/About";
import ModeSwitch from "./components/ModeSwitch";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { AppContext } from "./components/AppContext";
import axios from "axios";
import { postData_En, postData_Tr } from "./components/data";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState({});
  const [tr, setTr] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .post(
        "https://reqres.in/api/users",
        tr === false ? postData_En : postData_Tr
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [tr]);

  const values = { data, tr, setTr, darkMode, setDarkMode };

  return (
    <AppContext.Provider value={values}>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <ModeSwitch />
        <Header />
        <About />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
export default App;

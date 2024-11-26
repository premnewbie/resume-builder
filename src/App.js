import { createContext, useState } from "react";
import "./App.css";
import ResumeInfo from "./pages/ResumeInfo";
import PrintResume from "./components/PrintResume";

export const Context = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [layout, setLayout] = useState(1);
  const [infosFilled, setInfosFilled] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
  });

  const [academicInfo, setAcademicInfo] = useState([]);

  const [previousEmpInfo, setPreviousEmpInfo] = useState([]);

  const [skills, setSkills] = useState([]);

  const [projects, setProjects] = useState([]);

  const userData = {
    personalInfo: personalInfo,
    academicInfo: academicInfo,
    previousEmployment: previousEmpInfo,
    skills: skills,
    projects: projects,
  };

  const updateData = (infoType, data) => {
    var ans = infosFilled;
    switch (infoType) {
      case "personalInfo":
        setPersonalInfo(data);
        ans[0] = true;
        setInfosFilled(ans);
        break;
      case "academicInfo":
        setAcademicInfo((prev) => [...prev, data]);
        ans[1] = true;
        setInfosFilled(ans);
        break;
      case "employmentInfo":
        setPreviousEmpInfo((prev) => [...prev, data]);
        ans[2] = true;
        setInfosFilled(ans);
        break;
      case "skills":
        setSkills((prev) => [...prev, data]);
        ans[3] = true;
        setInfosFilled(ans);
        break;
      case "projects":
        setProjects((prev) => [...prev, data]);
        ans[4] = true;
        setInfosFilled(ans);
        break;
      default:
    }
  };

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLayout = () => {
    if (layout === 1) {
      setLayout(2);
    } else {
      setLayout(1);
    }
  };

  return (
    <Context.Provider
      value={{
        personalInfo,
        academicInfo,
        previousEmpInfo,
        skills,
        projects,
        userData,
        updateData,
        infosFilled,
        layout,
      }}
    >
      <div className="App" data-theme={theme}>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{ padding: "1rem", fontWeight: "bold" }}
            onClick={handleTheme}
          >
            {theme === "dark" ? "Light" : "Dark"} mode
          </button>
          {infosFilled[4] && (
            <button
              style={{ padding: "1rem", fontWeight: "bold" }}
              onClick={() => handleLayout()}
            >
              Change Layout
            </button>
          )}
        </div>
        {!infosFilled[4] && <ResumeInfo />}
        <div className="theme-changer" data-theme={theme}>
          {infosFilled[4] && <PrintResume />}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

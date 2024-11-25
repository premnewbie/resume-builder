import { createContext, useState } from "react";
import "./App.css";
import ResumeInfo from "./pages/ResumeInfo";
import Layout1 from "./components/Layout1";

export const Context = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const [infosFilled,setInfosFilled] = useState([false,false,false,false,false])

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
    "personalInfo": personalInfo,
    "academicInfo": academicInfo,
    "previousEmployment": previousEmpInfo,
    "skills": skills,
    "projects": projects,
  };

  const updateData = (infoType,data) => {
    var ans = infosFilled;
    switch (infoType){
      case "personalInfo": 
        setPersonalInfo(data);        
        ans[0] = true;
        setInfosFilled(ans)
        break;
      case "academicInfo":
        setAcademicInfo(prev => [...prev,data]);
        ans[1] = true;
        setInfosFilled(ans)
        break;
      case "employmentInfo": 
        setPreviousEmpInfo(prev => [...prev,data]);
        ans[2] = true;
        setInfosFilled(ans)
        break;
      case "skills":
        setSkills(prev => [...prev,data]);
        ans[3] = true;
        setInfosFilled(ans)
        break;
      case "projects":
        setProjects(prev => [...prev,data]);
        ans[4] = true;
        setInfosFilled(ans)
        break;
      default: ;
    }
  }

  const handleTheme = () => {
    setTheme(theme==='light'?'dark':'light');
  }

  return (
    <Context.Provider
      value={{ personalInfo, academicInfo, previousEmpInfo, skills, projects,userData,updateData,infosFilled }}
    >
      <div className="App" data-theme={theme}>
        <button onClick={handleTheme}>{theme} mode</button>
        <ResumeInfo />
        <Layout1 />
      </div>
    </Context.Provider>
  );
}

export default App;

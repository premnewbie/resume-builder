import GetAcademicInfo from "../components/GetAcademicInfo";
import GetEmploymentInfo from "../components/GetEmploymentInfo";
import GetPersonalInfo from "../components/GetPersonalInfo";
import GetProjects from "../components/GetProjectInfo";
import GetSkills from "../components/GetSkills";
import React, { useContext } from "react";
import { Context } from "../App";

const ResumeInfo = () => {
  const context = useContext(Context);
  const arr = context.infosFilled;
  return (
    <div className="resume-info">
      {!arr[0] && <GetPersonalInfo />}
      {arr[0] && !arr[1] && <GetAcademicInfo />}
      {arr[1] && !arr[2] && <GetEmploymentInfo />}
      {arr[2] && !arr[3] && <GetSkills />}
      {arr[3] && !arr[4] && <GetProjects />}
    </div>
  );
};

export default ResumeInfo;

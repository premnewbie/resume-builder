import React, { useContext } from "react";
import { Context } from "../App";

const Layout1 = () => {
  const contextData = useContext(Context);
  return (
    <div className="layout-1">
      {contextData.infosFilled[0] && <h2>{contextData.userData.personalInfo.name}</h2>}
      {contextData.infosFilled[0] && (
        <section className="personalInfo">
          <div>
            <p><strong>Email: </strong>{contextData.userData.personalInfo.email}</p>
            <p><strong>Phone: </strong>{contextData.userData.personalInfo.phone}</p>
            <p><strong>LinkedIn: </strong>{contextData.userData.personalInfo.linkedIn}</p>
            <p><strong>Github: </strong>{contextData.userData.personalInfo.github}</p>
          </div>
        </section>
      )}
      {contextData.infosFilled[0] && <hr style={{ border: "1px solid black" }} />}
      {contextData.infosFilled[1] && (
        <section className="academicInfo">
          <h3>Academic Info:</h3>
          {contextData.userData.academicInfo?.map((item) => (
            <div key={item.Degree}>
              <p>Institution: {item.institution}</p>
              <p>Degree: {item.degree}</p>
              <p>Year Of passing: {item.yearOfPassing}</p>
            </div>
          ))}
        </section>
      )}
      {contextData.infosFilled[1] && <hr style={{ height: "1px" }} />}
      {contextData.infosFilled[2] && (
        <section className="employmentInfo">
          <h3>Previous Employement</h3>
          {contextData.userData.previousEmployment?.map((item) => (
            <div key={item.company}>
              <p>Company Name: {item.company}</p>
              <p>Role: {item.role}</p>
              <p>Joined Date: {item.joinedOn}</p>
              <p>Relieved Date: {item.relievedOn}</p>
            </div>
          ))}
        </section>
      )}
      {contextData.infosFilled[2] && <hr style={{ height: "1px" }} />}
      {contextData.infosFilled[3] && (
        <section className="skills" style={{display: "flex",alignItems:'center',gap:'5px'}}>
          <h3>SKills: </h3>
          {contextData.userData.skills?.map((skill) => (
            skill
          ))}
        </section>
      )}
      {contextData.infosFilled[3] && <hr style={{ height: "1px" }} />}
      {contextData.infosFilled[4] && (
        <section className="projects">
          <h3>Project: </h3>
          {contextData.userData.projects?.map((project) => (<>
            <h5>{project.name}</h5>
            <p><strong>TechStack used: </strong>{project.techStack}</p>
            <p><strong>Description: </strong>{project.description}</p>
            </>
          ))}
        </section>
      )}
    </div>
  );
};

export default Layout1;

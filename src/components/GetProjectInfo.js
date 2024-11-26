import React, { useContext, useState } from "react";
import { Context } from "../App";

const GetProjects = () => {
  const context = useContext(Context);
  const [project, setProject] = useState({
    name: "",
    description: "",
    techStack: "",
  });

  const handleProjects = () => {
    if (!project.name || !project.techStack || !project.description) {
      alert("Enter the project details completely");
    } else {
      context.updateData("projects", project);
    }
  };

  return (
    <section className="project-info input-container">
      <h3>Projects: </h3>
      <div>
        <div>
          <label>Enter Project Name: </label>
          <input
            type="text"
            value={project.name}
            onInput={(e) =>
              setProject((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Tech Stack used: </label>
          <input
            type="text"
            value={project.techStack}
            onInput={(e) =>
              setProject((prev) => ({ ...prev, techStack: e.target.value }))
            }
          />
        </div>
        <div className="project-description">
          <label>Enter Project Description: </label>
          <textarea
          style={{height: '150px',width:'70%'}}
            type="text"
            value={project.description}
            onInput={(e) =>
              setProject((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>
      </div>
      <button onClick={handleProjects}>Add Project</button>
    </section>
  );
};

export default GetProjects;

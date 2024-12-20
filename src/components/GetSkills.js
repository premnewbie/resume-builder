import React, { useContext, useState } from "react";
import { Context } from "../App";

const GetSkills = () => {
  const context = useContext(Context);
  const [skill, setSkill] = useState("");

  const handleSkills = () => {
    if (!skill) {
      alert("Enter the skill");
    } else {
      context.updateData("skills", skill);
    }
  };

  return (
    <section className="skills-info input-container">
      <h3>Skills: </h3>
      <div>
        <div>
          <label>Enter Skills: </label>
          <input
            type="text"
            value={skill}
            onInput={(e) => setSkill(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleSkills}>Add Skill</button>
    </section>
  );
};

export default GetSkills;

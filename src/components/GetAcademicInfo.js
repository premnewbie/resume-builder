import React, { useContext, useState } from "react";
import { Context } from "../App";

const GetAcademicInfo = () => {
  const context = useContext(Context);
  const [info, setInfo] = useState({
    institution: "",
    degree: "",
    yearOfPassing: "",
  });

  const handleAcademicData = () => {
    if (!info.institution || !info.degree || !info.yearOfPassing) {
      alert("Enter all the academic details");
    } else {
      context.updateData("academicInfo", info);
      setInfo({ institution: "", degree: "", yearOfPassing: "" });
    }
  };

  return (
    <section className="academic-info input-container">
      <h3>Academic Info: </h3>
      <div>
        <div>
          <label>Institution: </label>
          <input
            type="text"
            value={info.institution}
            required
            onInput={(e) =>
              setInfo((prev) => ({ ...prev, institution: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Degree: </label>
          <input
            type="text"
            value={info.degree}
            required
            onInput={(e) =>
              setInfo((prev) => ({ ...prev, degree: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Year Of Passing: </label>
          <input
            type="number"
            value={info.yearOfPassing}
            required
            onInput={(e) =>
              setInfo((prev) => ({ ...prev, yearOfPassing: e.target.value }))
            }
          />
        </div>
      </div>
      <button onClick={handleAcademicData}>Add academic details</button>
    </section>
  );
};

export default GetAcademicInfo;

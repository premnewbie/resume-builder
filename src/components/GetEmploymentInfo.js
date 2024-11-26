import React, { useContext, useState } from "react";
import { Context } from "../App";

const GetEmploymentInfo = () => {
  const [employInfo, setEmployInfo] = useState({
    company: "",
    role: "",
    joinedOn: "",
    relievedOn: "",
  });
  const context = useContext(Context);

  const handleEmploymentData = () => {
    if (
      !employInfo.company ||
      !employInfo.role ||
      !employInfo.joinedOn ||
      !employInfo.relievedOn
    ) {
      alert("Enter all the employment details");
    } else {
      context.updateData("employmentInfo", employInfo);
      setEmployInfo({ company: "", role: "", joinedOn: "", relievedOn: "" });
    }
  };

  return (
    <section className="employment-info input-container">
      <h3>Employment Info: </h3>
      <div>
        <div>
          <label>Company Name: </label>
          <input
            type="text"
            value={employInfo.company}
            onInput={(e) =>
              setEmployInfo((prev) => ({ ...prev, company: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Role: </label>
          <input
            type="text"
            value={employInfo.role}
            onInput={(e) =>
              setEmployInfo((prev) => ({ ...prev, role: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Joined Date: </label>
          <input
            type="date"
            value={employInfo.joinedOn}
            onInput={(e) =>
              setEmployInfo((prev) => ({ ...prev, joinedOn: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Relieved Date: </label>
          <input
            type="date"
            value={employInfo.relievedOn}
            onInput={(e) =>
              setEmployInfo((prev) => ({ ...prev, relievedOn: e.target.value }))
            }
          />
        </div>
      </div>
      <button onClick={handleEmploymentData}>Add Employment details</button>
    </section>
  );
};

export default GetEmploymentInfo;

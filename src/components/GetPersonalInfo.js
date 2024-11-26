import React, { useContext, useState } from "react";
import { Context } from "../App";

const GetPersonalInfo = () => {
  const context = useContext(Context);
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
  });

  const handlePersonalData = () => {
    if (
      !personalDetails.name ||
      !personalDetails.email ||
      !personalDetails.phone ||
      !personalDetails.linkedIn ||
      !personalDetails.github
    ) {
      alert("Enter all the personal details");
    } else {
      context.updateData("personalInfo", personalDetails);
      setPersonalDetails({
        name: "",
        email: "",
        phone: "",
        linkedIn: "",
        github: "",
      });
    }
  };

  return (
    <section className="get-personal-info input-container">
      <h3>Personal Info: </h3>
      <div>
        <div>
          <label>Enter Name: </label>
          <input
            type="text"
            value={personalDetails.name}
            required
            onInput={(e) =>
              setPersonalDetails((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Enter email id: </label>
          <input
            type="email"
            value={personalDetails.email}
            required
            onInput={(e) =>
              setPersonalDetails((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Enter Phone Number: </label>
          <input
            type="number"
            value={personalDetails.phone}
            required
            onInput={(e) =>
              setPersonalDetails((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
        </div>
        <div>
          <label>Enter LinkedIn id: </label>
          <input
            type="text"
            value={personalDetails.linkedIn}
            required
            onInput={(e) =>
              setPersonalDetails((prev) => ({
                ...prev,
                linkedIn: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label>Enter github id: </label>
          <input
            type="text"
            value={personalDetails.github}
            required
            onInput={(e) =>
              setPersonalDetails((prev) => ({
                ...prev,
                github: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <button onClick={handlePersonalData}>Add personal info</button>
    </section>
  );
};

export default GetPersonalInfo;

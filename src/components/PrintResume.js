import React, { useRef, useCallback, useContext } from "react";
import { useReactToPrint } from "react-to-print";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import { Context } from "../App";

const PrintResume = () => {
  const context = useContext(Context);
  const layout = context.layout;

  const componentRef = useRef(null);

  const reactToPrintContent = () => {
    return componentRef.current;
  };

  const handlePrint = useReactToPrint({
    documentTitle: "Resume",
  });

  console.log(context.layout);

  return (
    <div style={{ margin: "2rem 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginBottom: "2rem",
          padding: "1rem",
          fontWeight: "bold",
        }}
      >
        <button
          style={{ padding: "1rem", fontWeight: "bold" }}
          onClick={() => handlePrint(reactToPrintContent)}
        >
          Print Resume
        </button>
      </div>
      <div ref={componentRef}>{layout === 1 ? <Layout1 /> : <Layout2 />}</div>
    </div>
  );
};

export default PrintResume;

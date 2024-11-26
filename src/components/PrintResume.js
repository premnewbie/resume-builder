import React, { useRef,useCallback, useContext } from "react";
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

  
  console.log(context.layout)

  return (
    <div>
      <button onClick={() => handlePrint(reactToPrintContent)}>Print Resume</button>
      <div ref={componentRef}>
        {layout===1?(<Layout1 />):(<Layout2 />)}
      </div>
    </div>
  );
};

export default PrintResume;

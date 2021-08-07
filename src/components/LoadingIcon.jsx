import React from "react";

import "./styles/css/LoadingIcon.css";

export default ({ classmod = "" }) => {
  classmod = classmod ? "spinner-dot--" + classmod : "";
  return (
    <svg
      id="loading-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
    >
      <circle className={`spinner-dot ${classmod}`} cx="30" cy="5" r="5" />
      <circle
        className={`spinner-dot ${classmod}`}
        cx="47.68"
        cy="12.32"
        r="5"
      />
      <circle className={`spinner-dot ${classmod}`} cx="55" cy="30" r="5" />
      <circle
        className={`spinner-dot ${classmod}`}
        cx="47.68"
        cy="47.68"
        r="5"
      />
      <circle className={`spinner-dot ${classmod}`} cx="30" cy="55" r="5" />
      <circle
        className={`spinner-dot ${classmod}`}
        cx="12.32"
        cy="47.68"
        r="5"
      />
      <circle className={`spinner-dot ${classmod}`} cx="5" cy="30" r="5" />
      <circle
        className={`spinner-dot ${classmod}`}
        cx="12.32"
        cy="12.32"
        r="5"
      />
    </svg>
  );
};

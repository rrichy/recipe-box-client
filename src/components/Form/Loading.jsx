import React from "react";
import LoadingIcon from "../LoadingIcon";

import "../styles/css/Loading.css";

const Loading = () => {
  return (
    <div className="loading-overlay">
      <LoadingIcon classmod={"green"} />
    </div>
  );
};

export default Loading;

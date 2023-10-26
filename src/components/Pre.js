import React from "react";

function Pre({ load }) {
  const id = load ? "preloader" : "preloader-none";
  return <div id={id}></div>;
}

export default Pre;

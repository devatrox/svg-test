import React from "react";
import ReactDOM from "react-dom";
import Svg from "@primer/octicons/build/svg/archive-24.svg"; // does not work
// import Svg from "./archive-24.svg"; // works

ReactDOM.render(
    <Svg />,
    document.getElementById("app"),
);

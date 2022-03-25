import React from "react";
import StyleProvider from "./theme-context";

const AllProviders = (props) => {
  return <StyleProvider>{props.children}</StyleProvider>;
};

export default AllProviders;

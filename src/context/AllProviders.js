import React from "react";
import StyleProvider from "./theme-context";
import { Provider } from "react-redux";
import store from "../store/index";

const AllProviders = (props) => {
  return (
    <StyleProvider>
      <Provider store={store}>{props.children}</Provider>
    </StyleProvider>
  );
};

export default AllProviders;

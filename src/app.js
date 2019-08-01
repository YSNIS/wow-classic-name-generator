import React from "react";
import ReactDOM from "react-dom";
import NameGenerator from "./client/nameGenerator";
import { AppContainer } from "react-hot-loader";

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("react-root")
  );
}
render(NameGenerator);

if (module.hot) {
  module.hot.accept("./client/NameGenerator.js", () => {
    const NewNameGenerator = require("./client/NameGenerator.js").default;
    render(NewNameGenerator);
  });
}

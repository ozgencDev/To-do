import React from "react";
import ReactDOM from "react-dom";
import Section from "./components/Section";
import Footer from "./components/Footer";

function Hello() {
  return (
    <div>
      <Section />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));

import React from "react";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Content from "./components/content/content.js";
import Reset from "./design/reset.scss";
import Design from "./design/design.scss";
import Responsive from "./design/lib/_responsive.scss";
import "./design/reset.scss";
import "./design/design.scss";

const App = () => {
  return (
    <>
      <Header title="React Design" />
      <Content />
      <Footer>
        <div>&copy; 2018 Code Fellows</div>
      </Footer>
    </>
  );
};

export default App;

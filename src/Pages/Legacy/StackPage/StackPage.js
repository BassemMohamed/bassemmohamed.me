import React from "react";
import styled from "styled-components";
import { Icon } from "../../UI";

const StackWrapper = styled.section`
  margin: 0 auto;
  max-width: 600px;
  display: grid;
  grid-template-columns: auto;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 1024px) {
    grid-template-columns: auto auto auto;
  }
`;

const StackPage = () => (
  <StackWrapper>
    <Icon
      name="HTML"
      imageLink={require("../../assets/images/codestack/html.png")}
    />
    <Icon
      name="CSS"
      imageLink={require("../../assets/images/codestack/css.png")}
    />
    <Icon
      name="Javascript"
      imageLink={require("../../assets/images/codestack/js.jpeg")}
    />
    <Icon
      name="ES6"
      imageLink={require("../../assets/images/codestack/es6.jpg")}
    />
    <Icon
      name="React"
      imageLink={require("../../assets/images/codestack/react.png")}
    />
    <Icon
      name="Redux"
      imageLink={require("../../assets/images/codestack/redux.png")}
    />
    <Icon
      name="Node"
      imageLink={require("../../assets/images/codestack/node.png")}
    />
    <Icon
      name="npm"
      imageLink={require("../../assets/images/codestack/npm.png")}
    />
    <Icon
      name="Git"
      imageLink={require("../../assets/images/codestack/git.png")}
    />
  </StackWrapper>
);

export default StackPage;

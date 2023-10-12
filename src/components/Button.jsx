import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  font-size: 1.2em;
  font-weight: 600;
  padding: 1.2em;
  border-radius: 10px;
  box-shadow: 2px 1px 1px 2px #989e6b7f;
  cursor: pointer;
  background-color: #c6c279;
  color: #000000;
`

export const Button = ({ name, action }) => {
  return (
    <div>
      <ButtonStyle onClick={action}>{name}</ButtonStyle>
    </div>
  );
};

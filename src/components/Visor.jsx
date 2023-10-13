import React from "react";
import styled from "styled-components";

export const Visor = ({ secods, minutes }) => {
  return (
    <div id="visor">
      {minutes}:{secods}
    </div>
  );
};

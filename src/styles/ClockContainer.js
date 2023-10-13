import styled from "styled-components";

export const ClockContainer = styled.div`
  background-color: #f9f49c;
  width: 30%;
  height: 55vh;
  border-radius: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 10px 5px 5px 10px #100c085e;

  #visor {
    background-color: #ffffff93;
    box-shadow: 2px 1px 1px 2px #ffffffcd;
    border-radius: 10px;
    width: 90%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
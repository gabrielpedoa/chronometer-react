import styled from "styled-components";
import { Button } from "./components/Button";
import { Visor } from "./components/Visor";
import { Global } from "./styles/Global";

const DivPai = styled.div`
  background-color: #f0d85f;
  width: 100%;
  height: 100vh;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ClockContainer = styled.div`
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
    background-color: #fff;
    border-radius: 10px;
    width: 90%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonClock = styled.div`
  display: flex;
  gap: .8em;
  padding: 1.8em;

`

function App() {
  return (
    <DivPai>
      <Global />
      <ClockContainer>
        <Visor value={"olá"} />
        <ButtonClock>
          <Button name={'stop'} />
          <Button name={'resume'} />
        </ButtonClock>
      </ClockContainer>
    </DivPai>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Visor } from "./components/Visor";
import { ButtonClock } from "./styles/ButtonClock";
import { ClockContainer } from "./styles/ClockContainer";
import { DivPai } from "./styles/DivPai";
import { Global } from "./styles/Global";

function App() {
  const [pause, setPause] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!pause) {
      setTimeout(() => {
        nextSeconds();
      }, 1000);
    }
  }, [pause, seconds]);

  function nextSeconds() {
    console.log(seconds);
    if (seconds + 1 >= 60) {
      console.log("aaaaaaaaaaaaaaaaa");
      setMinutes((c) => c + 1);
      setSeconds(0);
    } else {
      setSeconds((c) => c + 1);
    }
  }

  function convertToTime(value) {
    let time = String(value);
    if (time.length === 1) {
      return `0${time}`;
    }
    return value;
  }

  function handlePause() {
    console.log("pause");
    setPause((c) => !c);
  }

  return (
    <DivPai>
      <Global />
      <ClockContainer>
        <Visor
          secods={convertToTime(seconds)}
          minutes={convertToTime(minutes)}
        />
        <ButtonClock>
          <Button name={pause ? "resume" :"stop"} action={handlePause} />
        </ButtonClock>
      </ClockContainer>
    </DivPai>
  );
}

export default App;

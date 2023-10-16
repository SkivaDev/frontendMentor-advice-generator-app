import "./App.css";
import dice from "../src/assets/images/icon-dice.svg";
import divider_desk from "../src/assets/images/pattern-divider-desktop.svg";
import divider_mobile from "../src/assets/images/pattern-divider-mobile.svg";
import { useEffect } from "react";
import { useState } from "react";
import adviceslipApi from "./libs/adviceslipApi";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function getAdvice() {
    setIsLoading(true);
    adviceslipApi.getRandomAdvice({}).then((data) => {
      console.log(data.data);
      setAdviceId(data.data.slip.id)
      setAdvice(data.data.slip.advice);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getAdvice();
  }, []);

  const handleClick = () => {
    getAdvice();
  };

  return (
    <main className="w-full h-screen flex justify-center items-center bg-dark-blue">
      <div className="relative max-w-[33.7rem] p-[3rem] pb-[4rem] m-[1.3rem] mb-[4rem] bg-dark-grayish-blue text-center rounded-xl transition-all">
        <h1 className="sr-only">Advice generator</h1>
        <div className={`loader z-10 ${isLoading ? '' : 'hidden'}`} role="alert" aria-live="assertive">
            <p className="sr-only loader__spinner">Loading...</p>
          </div>
        <div className={` ${isLoading ? 'invisible' : ''}`}>
          <h2 className="text-[.8rem] text-neon-green mb-[24px] tracking-[0.3rem]">
            ADVICE #{adviceId}
          </h2>
          <p className="text-[1.7rem] text-light-cyan mb-[40px]">“{advice}”</p>
          <picture className="mb-[.75rem]">
            <source srcSet={divider_desk} media="(min-width: 400px)" />
            <img src={divider_mobile} alt="divider" />
          </picture>
        </div>

        <button className={`btn absolute bottom-[-2rem] left-[50%] translate-x-[-50%] w-[4rem] h-[4rem] bg-neon-green rounded-full flex justify-center items-center z-10 ${isLoading ? 'hidden' : ''}`}>
          <img src={dice} alt="dice" onClick={handleClick} />
        </button>
      </div>
    </main>
  );
}

export default App;

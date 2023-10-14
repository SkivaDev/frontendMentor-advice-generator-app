import "./App.css";
import dice from "../src/assets/images/icon-dice.svg";
import divider_desk from "../src/assets/images/pattern-divider-desktop.svg";
import divider_mobile from "../src/assets/images/pattern-divider-mobile.svg";

function App() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-dark-blue">
      <div className="relative max-w-[33.7rem] p-[3rem] pb-[4rem] m-[1.3rem] mb-[4rem] bg-dark-grayish-blue text-center rounded-xl">
        <h1 className="text-[.8rem] text-neon-green mb-[24px] tracking-[0.3rem]">ADVICE #166</h1>
        <h2 className="text-[1.7rem] text-light-cyan mb-[40px]">“The quieter you become, the more you can hear.”</h2>
        <picture className="mb-[.75rem]">
          <source srcSet={divider_desk} media="(min-width: 400px)" />
          <img src={divider_mobile} alt="divider" />
        </picture>

        <button className="btn absolute bottom-[-2rem] left-[50%] translate-x-[-50%] w-[4rem] h-[4rem] bg-neon-green rounded-full flex justify-center items-center z-10">
          <img src={dice} alt="dice" />
        </button>
      </div>
    </main>
  );
}

export default App;

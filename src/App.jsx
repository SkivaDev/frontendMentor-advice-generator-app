import "./App.css";

function App() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-dark-blue">
      <div className="relative max-w-[33.7rem] p-[3rem] m-[1.3rem] mb-[4rem] bg-dark-grayish-blue text-center">
        <h1 className="text-[.8rem] text-neon-green">ADVICE #166</h1>
        <h2 className="text-[1.7rem] text-light-cyan">“The quieter you become, the more you can hear.”</h2>
        <div>----</div>

        <button className="absolute bottom-[-2rem] left-[50%] translate-x-[-50%] w-[4rem] h-[4rem] bg-neon-green rounded-full">
          x
        </button>
      </div>
    </main>
  );
}

export default App;

import "./App.css";
import { Game } from "./components/Game";

const App = () => {
  return (
    <div className="App">
      <section className="sideSection"></section>
      <div className="mainSection">
        <section className="title">
          <p className="titleValue">TIC TAC TOE Game</p>
        </section>
        <section className="gameZone">
          <Game />
        </section>
      </div>
      <section className="sideSection"></section>
    </div>
  );
};

export default App;

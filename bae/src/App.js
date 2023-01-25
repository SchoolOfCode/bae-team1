import "./App.css";
import "./appStyles.css";
import logo from "./logo2.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" className="logo" />
        <h1>
          Eco<span class="bold">Offset</span>
        </h1>
      </header>
      <main>
        <section id="left">
          <h2>Welcome back, Tre!</h2>
          <section id="quiz">Quiz will go here!</section>
          <section id="trees">Trees will go here!</section>
        </section>
        <section id="right">
          <section id="profile">
            <h3>Tre Hugger!</h3>
          </section>
          <section id="co2">Co2 will go here!</section>
        </section>
      </main>
    </div>
  );
}

export default App;

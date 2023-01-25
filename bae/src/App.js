import Card from "./Card";
import "./App.css";
import "./appStyles.css";
import Donut from "./Donut/Donut";
import logo from "./logo2.png";
import avatar from "./avatar2.png";
import TreeSection from "./TreeSection";

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
          <section id="quiz">
            {" "}
            <Card />
          </section>
          <section id="trees">
            <TreeSection></TreeSection>
          </section>
        </section>
        <section id="right">
          <section id="profile">
            <img src={avatar} alt="avatar" className="avatar" />
            <h3>Tre Hugger</h3>
            <h4>Junior Software Engineer</h4>
          </section>
          <section id="co2">
            <Donut
              colors={["#429F15", "#77C650", "#E9FFE2", "#F4FDF1"]}
              stats={[
                {
                  label: "Diet",
                  value: 25,
                },
                {
                  label: "Commute",
                  value: 75,
                },
              ]}
            />
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;

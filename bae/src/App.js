import Card from "./Card";
import "./App.css";
import "./appStyles.css";
import Donut from "./Donut/Donut";
import logo from "./logo2.png";
import avatar from "./avatar2.png";
import TreeSection from "./TreeSection";
import './App.css';
import { useState } from "react"
import "./Card.css"

function App() {
const [page, setPage] = useState(0)
const [travel, setTravel] = useState("")
const [diet, setDiet] = useState(0)
const [miles, setMiles] = useState(0)

function handleClick(){
    setPage(page+1)
    console.log(page)
}

function calculateDiet(diet){
  if (diet ==='Heavy'){
    return 1.6/365
  }
  if (diet ==='Medium'){
    return 1.25/365
  }
  if (diet ==='Low'){
    return 1.04/365
  }
  if (diet ==='Occasional'){
    return 0.87/365
  }
  if (diet ==='Meat Free'){
    return 0.85/365
  }
}


//**to do please**
function calculateCommute(travel, miles){
  if (travel ==='Car'){
    return (0.03/100)*miles
  }
  if (travel ==='Public Transport'){
    return (0.011/100)*miles
  }
  if (travel ==='Motorbike'){
    return (0.01/100)*miles
  }
}

function transport(event){
setTravel(event.target.value)
// console.log(travel)
}

function eater(event){
    setDiet(event.target.value)
    
}
function distance(event){
setMiles(event.target.value)
}


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
            <div className="Card">
       <h1></h1> 
       <div>
       {page===0 ? <>
       <progress id="progress" className="progress progress-success w-56" value="10" max="100"></progress>
        <div className="card w-96 bg-accent text-primary-content"  id="card">
  <div className="card-body ">
    <h2 className="card-title">How do you commute to work?</h2>
    <div >
    <input onChange={transport} type="radio" value="Car" name="Car"/>Car
    <input onChange={transport} type="radio" value="Public Transport" name="Car"/>Public Transport
    <input onChange={transport} type="radio" value="Motorbike" name="Car"/>Motorbike
    </div>
    <p>How many miles is your commute?</p>
    <input onChange={distance} type="number" id="milesInput" placeholder="0"/>
    <div className="card-actions justify-end">
      <button onClick={handleClick} className="btn">Submit</button>
      
    </div>
  </div>
</div>
</>: page===1 ?<>
<progress id="progress" className="progress progress-success w-56" value="50" max="100"></progress>
<div className="card w-96 bg-primary text-primary-content" id="card2" >
  <div className="card-body ">
    <h2 className="card-title">How would you describe your diet?</h2>
    <div id="dietRadio">
    <input onChange={eater} type="radio" value="Heavy" name="Heavy"/>Heavy
    <input onChange={eater} type="radio" value="Medium" name="Heavy"/>Medium
    <input onChange={eater} type="radio" value="Low" name="Heavy"/>Low
    <input onChange={eater} type="radio" value="Occasional" name="Heavy"/>Occasional
    <input onChange={eater} type="radio" value="Meat Free" name="Heavy"/>Meat Free
    </div>

    <div className="card-actions justify-end">
      <button onClick={handleClick} className="btn">Submit</button>
    </div>
  </div>
</div>
</>:<>


       
       <progress id="progress" className="progress progress-success w-56" value="10" max="100"></progress>
        <div className="card w-96 bg-primary text-primary-content"  id="card">
  <div className="card-body ">
    <h2 className="card-title">Thank you for completing the quiz!</h2>
   
    {/* <p>How many miles is your commute?</p> */}
    {/* <input id="milesInput"placeholder="In Miles"/> */}
    <div className="card-actions justify-end">
    
      
    </div>
  </div>
</div>

</>}
        </div>
    </div>




          </section>
          <section id="trees">
            <TreeSection commute={calculateCommute(travel,miles)} diet={calculateDiet(diet)}></TreeSection>
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
                  value: (1000*(calculateDiet(diet))),
                },
                {
                  label: "Commute",
                  value: 1000*(calculateCommute(travel, miles)),
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

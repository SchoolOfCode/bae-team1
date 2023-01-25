import './App.css';
import { useState } from "react"
import "./Card.css"

function Card() {
const [page, setPage] = useState(0)
const [travel, setTravel] = useState("")
const [diet, setDiet] = useState(0)
const [miles, setMiles] = useState(0)

function handleClick(){
    setPage(page+1)
    console.log(page)
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
console.log(miles)
  return (
    
    <div className="Card">
       <h1></h1> 
       <div>
       {page===0 ? <>
       <progress id="progress" className="progress progress-success w-56" value="10" max="100"></progress>
        <div className="card w-96 bg-primary text-primary-content"  id="card">
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
    <h2 className="card-title">Thank you for completing the quiz?</h2>
   
    {/* <p>How many miles is your commute?</p> */}
    {/* <input id="milesInput"placeholder="In Miles"/> */}
    <div className="card-actions justify-end">
    
      
    </div>
  </div>
</div>

</>}
        </div>
    </div>
  );
}

export default Card;

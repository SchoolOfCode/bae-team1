import React from "react";



function TreeSection({diet, commute}) {
  console.log('this is diet', diet)
  console.log('this is commute', commute)
  let tonnes = (diet+commute)*365;
  console.log('this is tonnes', tonnes)
  let number = ((tonnes * 1000) / 30).toFixed(2);
  let trees = "";
  for (let i = 0; i < number / 10; i++) {
    trees = trees + "🌳";
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Based on yesterday</h2>
        <p>
          If everyday was like yesterday, you will have used {tonnes} tonnes of carbon from commuting and eating over the year! Which is equivalent to {number} trees!{" "}
        </p>
        <div className="card-icon justify-end">
          <p>{trees}</p>
        </div>
      </div>
    </div>
  );
}

export default TreeSection;

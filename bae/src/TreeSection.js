import React from 'react'

let object = {tonnes: 10,}
let number = ((object.tonnes*1000)/30).toFixed(2)

function TreeSection() {
  let trees = ''
  for (let i=0; i<number/10; i++){
    trees = trees + '🌳'
  }

  return (
    <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Based on yesterday</h2>
    <p>If everyday was like yesterday, you will have used {object.tonnes} tonnes of carbon! Which is equivalent to {number} trees! </p>
    <div className="card-icon justify-end">
    <p>{trees}</p>
    </div>
  </div>
</div>
  )
}

export default TreeSection
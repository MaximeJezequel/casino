import React from "react"

import "./AliceCard.css"

import frame from "../assets/frame1_gold.png"
import frame2 from "../assets/frame1_gold90.png"

const AliceCard = ({ item, newIndex }) => {
  return (
    <div key={newIndex} className={"card"}>
      <img className="card-img top" src={frame} alt="frame" />
      <img className="card-img bottom" src={frame} alt="frame" />
      <img className="card-img left" src={frame2} alt="frame2" />
      <img className="card-img right" src={frame2} alt="frame2" />
      {newIndex > 0 && <h2 className="card-tag">{newIndex}</h2>}
      <h2 className="card-text">{item}</h2>
      {newIndex > 0 && <div className={`card-token hotel${newIndex}`}></div>}
    </div>
  )
}

export default AliceCard

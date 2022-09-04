import React from "react"

import "./AliceCard.css"

const AliceCard = ({ item, newIndex, handleClick }) => {
  return (
    <div key={newIndex} className={"card"}>
      {newIndex > 0 && <h2 className="card-tag">{newIndex}</h2>}
      <h2 className="card-text" onClick={() => handleClick(newIndex)}>
        {item}
      </h2>
      {newIndex > 0 && <div className={`card-token hotel${newIndex}`}></div>}
    </div>
  )
}

export default AliceCard

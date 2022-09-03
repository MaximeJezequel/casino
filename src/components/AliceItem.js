import React from "react"

const AliceItem = ({ index, item, items, setItems }) => {
  const handleClick = (index) => {
    if (!index && items.length > 13)
      setItems(items.filter((item) => item !== items[1]))
  }

  const newIndex = index + 14 - items.length

  return (
    <div key={newIndex} className={"card"}>
      {newIndex > 1 && <h2 className="tag">{newIndex - 1}</h2>}
      <h2 className="text" onClick={() => handleClick(newIndex)}>
        {item}
      </h2>
      <div className={`token hotel${index}`}></div>
    </div>
  )
}

export default AliceItem

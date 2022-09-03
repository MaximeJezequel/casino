import React, { useEffect, useState } from "react"

import AliceCarousel from "react-alice-carousel"
import AliceItem from "./AliceItem"

import cards from "../data/cards"

import "./Alice.css"

const Alice = () => {
  const [items, setItems] = useState(cards)
  const [cardItems, setCardItems] = useState([])

  const handleOnDragStart = (e) => e.preventDefault

  useEffect(() => {
    const mapping = (items) => {
      setCardItems(
        items.map((item, index) => (
          <AliceItem
            key={index}
            index={index}
            item={item}
            items={items}
            setItems={setItems}
          />
        ))
      )
    }
    mapping(items)
  }, [items])

  return (
    <AliceCarousel
      items={cardItems}
      disableDotsControls
      disableButtonsControls
      onDragStart={handleOnDragStart}
    />
  )
}

export default Alice

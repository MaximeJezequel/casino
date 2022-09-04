import React from "react"

import AliceCard from "./AliceCard"
import AliceLogo from "./AliceLogo"

const AliceItem = ({ logo, index, item, items, setItems }) => {
  const newIndex = index + 13 - items.length

  return !index ? (
    <AliceLogo logo={logo} items={items} setItems={setItems} />
  ) : (
    <AliceCard item={item} newIndex={newIndex} />
  )
}

export default AliceItem

import React, { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"

import "./Alice.css"

const Alice = () => {
  const [items, setItems] = useState([
    "CASINO",
    "Avant de commencer, échangez chaque pièce avec un billet en suivant une flèche",
    "1. Echanger la pièce de 2€ avec le billet de 10€",
    "2. Echangez la pièce de 50 cts avec celle de 1€",
    "3. Donnez-moi l'argent qui se trouve sur le MGM GRAND",
    "4. Echangez la pièce de 50 cts en suivant une flèche",
    "5. Donnez-moi l'argent qui se trouve sur le CAESARS PALACE",
    "6. Echanger la pièce de 50 cts en suivant une flèche",
    "7. Donnez-moi l'argent qui se trouve sur le BELLAGIO",
    "8. Echanger la pièce de 50 cts en suivant une flèche",
    "9. Donnez-moi l'argent qui se trouve sur le PARIS",
    "10. Donnez-moi l'argent qui se trouve sur le MANDALAY BAY",
    "11. ... Et donnez-le moi !",
    "12. Vous pouvez garder l'argent qui se trouve sur la table 😉",
  ])

  const handleClick = (index) => {
    if (!index && items.length > 13)
      setItems(items.filter((item) => item !== items[1]))
  }

  const [cardItems, setCardItems] = useState([])

  useEffect(() => {
    const mapping = (items) => {
      setCardItems(
        items.map((item, index) => (
          <div key={index} className={"card"}>
            <h2 className="text" onClick={() => handleClick(index)}>
              {item}
            </h2>
          </div>
        ))
      )
    }
    mapping(items)
  }, [items])

  return (
    <AliceCarousel
      mouseTracking
      items={cardItems}
      disableDotsControls
      disableButtonsControls
    />
  )
}

export default Alice

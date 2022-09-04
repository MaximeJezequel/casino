import React from "react"

import "./AliceLogo.css"

const AliceLogo = ({ logo, items, setItems }) => {
  const handleClick = () => {
    items.length > 13 && setItems(items.filter((item) => item !== items[1]))
  }

  return (
    <div className="alice-logo">
      <img
        src={logo}
        className="alice-logo-img"
        alt="logo"
        onClick={() => window.location.reload(false)}
      />
      <h1 className="alice-logo-txt" onClick={() => handleClick()}>
        CASIN'O
      </h1>
      <p className="alice-logo-subtxt">Prêt⸱e à défier le hasard ?</p>
    </div>
  )
}

export default AliceLogo

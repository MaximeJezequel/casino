import React from "react"

import logo from "../assets/casino_spin.png"
import "./AliceLogo.css"

const AliceLogo = ({ index, item, handleOnClick }) => {
  const restart = (e) => {
    e.preventDefault()
    window.location.reload(false)
  }
  return (
    <div className="alice-logo" key={index}>
      <img
        src={logo}
        className="alice-logo-img"
        alt="logo"
        onClick={(e) => restart(e)}
      />
      <h1 className="alice-logo-txt" onClick={(e) => handleOnClick()}>
        {item}
      </h1>
      <p className="alice-logo-subtxt">Prêt⸱e à défier le hasard ?</p>
    </div>
  )
}

export default AliceLogo

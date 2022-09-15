import React from "react"

import lasvegas from "../assets/casino_las-vegas.png"
import "./AliceLogo.css"

const AliceLogo = ({ index, logo, item, handleOnClick }) => {
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
      <img
        src={lasvegas}
        className="alice-logo-vegas"
        alt="las vegas"
        onClick={(e) => handleOnClick()}
      />
      <p className="alice-logo-subtxt">{item.line3}</p>
    </div>
  )
}

export default AliceLogo

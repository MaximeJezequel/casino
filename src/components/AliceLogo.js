import React from "react"

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
      <h1 className="alice-logo-txt" onClick={(e) => handleOnClick()}>
        <span>{item.line1}</span>
        <span>{item.line2}</span>
        <span>{item.line1}</span>
      </h1>
      <p className="alice-logo-subtxt">{item.line3}</p>
    </div>
  )
}

export default AliceLogo

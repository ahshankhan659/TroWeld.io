import React from 'react'

function AboutSection(props) {
  return (
    <>
    <div className="about-container">
        <div className="about-l">
            <h1>{props.heading}<span> Troweld</span></h1>
            <p>{props.text}</p>
            <button type='button'>{props.botton}</button>
        </div>
        <div className="about-r">
          <div className="imag">
            <img src={props.imge} alt="" />
          </div>
        </div>
    </div>
    </>
  )
}

export default AboutSection

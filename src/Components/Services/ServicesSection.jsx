import React from 'react'
import './Services.css'

function ServicesSection(props) {
  return (
    <>
     <div >
            <div className="main-services-detail">
                <img src={props.imge} alt="" />
                <h2>{props.head}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    </>
  )
}

export default ServicesSection
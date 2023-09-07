import React from 'react'
import S1 from '../../images/s1.png'
import { servicesInfo } from './ServicesDetail'
import ServicesSection from './ServicesSection'
import './Services.css'

function Services() {
  return (
    <>
    <div className="services">
        <h1>Our<span> Services</span></h1>
       <div className="main-services">
        {servicesInfo.map((element)=>{
            return(
                <ServicesSection imge={element.image} head={element.title} text={element.para}/>
            )
        })}
       </div>
        <button type=''>Read More</button>
    </div>
    </>
  )
}

export default Services
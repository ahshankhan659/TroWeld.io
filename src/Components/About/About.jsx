import React from 'react' 
import { aboutInfo } from './AboutDetail'
import AboutSection from './AboutSection'
import './About.css'

function About() {
  return (
    <>
    {
        aboutInfo.map((element)=>{
            return(
                <AboutSection heading={element.head} text={element.para} botton={element.btn} imge={element.image}/>
            )
        })
    }
    </>
  )
}

export default About
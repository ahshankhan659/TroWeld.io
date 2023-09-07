import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Portfolio.css'
import PortfolioSection from './PortfolioSection';
import { portfolioInfo } from './PortfoliodDetail';

function Portfolio(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 764 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="portfolio">
                <center>
                    <h1>Our Work Portfolio</h1>
                    <Carousel  autoPlaySpeed={3000} infinite={true} autoPlay={props.deviceType !== "mobile" ? true : false}
 responsive={responsive}>
                        
                       {portfolioInfo.map((element)=>{
                        return(
                            <PortfolioSection imge={element.image} bttn={element.button}/>
                        )
                       })}
                       
                        {/* <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div> */}
                    </Carousel>;
                </center>
            </div>
        </>
    )
}

export default Portfolio
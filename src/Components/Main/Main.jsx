import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Main.css'

function Main(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="navbar-container">
                <Carousel infinite={true} autoPlay={props.deviceType !== "mobile" ? true : false} arrows={false} autoPlaySpeed={3000} responsive={responsive}>
                    <div>
                        <div className="main-conatiner">
                            <div className="main">
                                <h1>We Build <br />The Thing Architects <br /> Dream Up</h1>
                            </div>
                            <div className="main-bottom">
                                <div className="button">
                                    <button type='button' className='btn btn1'>Read More</button>
                                    <button type='button' className='btn btn2'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main-conatiner">
                            <div className="main">
                                <h1>We Build <br />The Thing Architects <br /> Dream Up</h1>
                            </div>
                            <div className="main-bottom">
                                <div className="button">
                                    <button type='button' className='btn btn1'>Read More</button>
                                    <button type='button' className='btn btn2'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
        </>
    )
}

export default Main
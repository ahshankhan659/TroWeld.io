import React from 'react'
import './Testimonials.css'
import client from '../../images/client.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Testimonials(props) {
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
            <div className="testimonials">
                <h1>
                    Testimonials
                </h1>
                <Carousel infinite={true}
                arrows={false}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}  removeArrowOnDeviceType={["tablet", "mobile"]} 
                    showDots={true}responsive={responsive}>
                    <div>
                        <div className="main-testimonials">
                            <div className="image">
                                <img src={client} alt="" />
                            </div>
                            <div className="detail">
                                <p>ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrudexercitation ullamco laboris nisi ut aliquip ex eacommodo<br /> consequat. Duis aute irure dolor inreprehenderit in voluptate velit</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main-testimonials">
                            <div className="image">
                                <img src={client} alt="" />
                            </div>
                            <div className="detail">
                                <p>ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrudexercitation ullamco laboris nisi ut aliquip ex eacommodo<br /> consequat. Duis aute irure dolor inreprehenderit in voluptate velit</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main-testimonials">
                            <div className="image">
                                <img src={client} alt="" />
                            </div>
                            <div className="detail">
                                <p>ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrudexercitation ullamco laboris nisi ut aliquip ex eacommodo<br /> consequat. Duis aute irure dolor inreprehenderit in voluptate velit</p>
                            </div>
                        </div> 
                    </div>
                </Carousel>;

            </div>
        </>
    )
}

export default Testimonials
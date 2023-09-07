import React from 'react'


function PortfolioSection(props) {
    return (
        <>
            <div className="bg-img">
                <img src={props.imge} alt="" />
                <div className="hover-img">
                    <div className="w-img">
                        <button type='button'>{props.bttn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioSection
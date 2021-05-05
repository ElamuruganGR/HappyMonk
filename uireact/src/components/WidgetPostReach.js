import React from 'react';
import '../scss/widget-post-reach.scss'
export const WidgetPostReach = () => {
    return (
        <div className="widget-post-reach">
            <div className="reach-wrap">
                <p className="greet">Great Job, You Saved</p>
                <p className="amount">270K</p>
                <p className="info">Post Reach This Year</p>
                <p className="year">2020</p>
            </div>
            <div className="reach-bg">
                <div className="group-18">
                    <img className="polygon1" src="/images/widgets/Polygon1.svg" alt="polygon"/>
                    <img className="polygon2" src="/images/widgets/Polygon2.svg" alt="polygon"/>
                    <img className="polygon3" src="/images/widgets/Polygon3.svg" alt="polygon"/>
                    <img className="polygon4" src="/images/widgets/Polygon4.svg" alt="polygon"/>
                </div>
            </div>
        </div>
    )
}
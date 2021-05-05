import React from 'react';
import '../scss/latest-updates.scss';
export const LatestUpdates = () => {
    return (
        <div className="latest-updates">
            <div className="icon-wrap">
                <img src="/images/widgets/FrontRight.svg" alt="FrontRight" />
            </div>
            <div className="desc-wrap">
                <div className="desc">
                    <p>{`Latest Updates`}</p>
                    <p>{`F&B Industry`}</p> 
                </div>
                <img src="/images/widgets/plus.svg" alt="plus" />
            </div>
        </div>
    )
}
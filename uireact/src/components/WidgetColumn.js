import React from 'react';
import '../scss/widget-column.scss';
export const WidgetColumn = () => {
    return (
        <div className="widget-column">
            <div className="graph">
                <img src="/images/widgets/Graph.svg" alt="Graph" />
                <div className="graph-desc">
                    <div className="desc-left">
                        <p>$21.2K</p>
                        <p>Visitors this year</p>
                    </div>
                    <div className="desc-right">
                        <div className="index">
                            <img src="/images/widgets/up-arrow.svg" alt="up-arrow" />
                            <p>105.23 %</p>
                        </div>
                        <p>Since last year</p>
                    </div>
                </div>
            </div>
            <div className="widget-row">
                <div className="video-play">
                    <img src="images/widgets/VideoPlays.svg" />
                </div>
                <div className="scheduled-posts">
                    <img src="images/widgets/ScheduledPosts.svg" />
                </div>
            </div>
        </div>
    )
}
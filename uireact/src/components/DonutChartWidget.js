import React from 'react';
import '../scss/donut-chart-widget.scss'
export const DonutChartWidget = () => {
    return (
        <div className="donut-chart-widget">
            <img src="/images/widgets/Ellipse1.svg" alt="eclipse1" />
            <img src="/images/widgets/Ellipse3.svg" alt="eclipse3" />
            <div className="pile-desc">
                <span className="percentile-number">89</span><span className="percentile-symbol">%</span>
                <p className="text">Posts Went Viral</p>
            </div>
        </div>
    )
}
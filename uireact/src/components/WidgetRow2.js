import React from 'react';
import '../scss/widget-row-2.scss'
import { DonutChartWidget } from './DonutChartWidget';
import { SocialMediaUpdates } from './SocialMediaUpdates';
import { WidgetPostReach } from './WidgetPostReach';
export const WidgetRow2 = () => {
    return (
        <div className="widget-row-2">
            <SocialMediaUpdates />
            <DonutChartWidget />
            <WidgetPostReach />
        </div>
    )
}
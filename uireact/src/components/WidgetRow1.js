import React from 'react';
import '../scss/widget-row-1.scss';
import { LatestUpdates } from './LatestUpdates';
import { WeatherWidget } from './WeatherWidget';
import { WidgetColumn } from './WidgetColumn';
export const WidgetRow1 = () => {
    return (
        <div className="widget-row-1">
            <LatestUpdates />
            <WidgetColumn />
            <WeatherWidget />
        </div>
    )
}
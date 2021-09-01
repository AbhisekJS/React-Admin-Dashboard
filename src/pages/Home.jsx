import React from 'react'
import Charts from '../components/charts/Charts'
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from '../dummyData'
import WidgetSmall from '../components/widgetSm/WidgetSmall'
import WidgetsLarge from '../components/widgetLg/WidgetLarge'
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetsLarge/>
            </div>
        </div>
    )
}

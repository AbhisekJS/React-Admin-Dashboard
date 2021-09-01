import React from 'react'
import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2415</span>
                    <span className="featuredMoneyRate">
                        -11.54<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared To Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,315</span>
                    <span className="featuredMoneyRate">
                        21.54<ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared To Last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,250</span>
                    <span className="featuredMoneyRate">
                        +10.54<ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared To Last Month</span>
            </div>
        </div>
    )
}

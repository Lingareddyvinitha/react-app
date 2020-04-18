import React from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
}
from 'recharts';


class C extends React.Component {
    static defaultProps = {
        name: "react",
    };
    render() {
        const { name } = this.props
        return (
            <div>
            <div>{name}</div>
            
            </div>
        )
    }
}



export default C

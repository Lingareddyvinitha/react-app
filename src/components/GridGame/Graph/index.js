import React from 'react'
import { observer } from 'mobx-react'
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
import gridStore from '../../../stores/GridStore'



@observer
class Graph extends React.Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    render() {
        const info = gridStore.playerInfo
        const data = [...info]
        return (
            <div>
            <div>{data.length}</div>
            <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="NoOfAttempt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="level" stroke="#82ca9d"  activeDot={{ r: 8 }} />
      </LineChart>
      </div>
        )
    }
}

export default Graph

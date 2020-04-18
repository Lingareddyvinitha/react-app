import React from "react"
import { Provider } from "mobx-react"

import B from './B'


class A extends React.Component {

    render() {
        setTimeout(
            function() { alert("hi") }, 500)
        // console.log(x())
        return (
            <div>
            <Provider temp='value'>
            <B temp="this"/>
            </Provider>
            
            </div>
        )
    }
}
export default A

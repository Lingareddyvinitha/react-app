import React from "react"
import { Provider, observer } from "mobx-react"
import B from './B.js'


class A extends React.Component {
    render() {
        return (
            <div>
            <Provider temp={'value'}>
            
            <B temp="this"/>
            </Provider>
            
            </div>
        )
    }
}
export default A

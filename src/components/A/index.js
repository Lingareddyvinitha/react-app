import React from "react"
import { observable } from 'mobx'
import { Provider, observer } from "mobx-react"

import B from './B'

@observer
class A extends React.Component {

    @observable count = 1
    increment = () => {
        this.count++
    }
    render() {
        return (
            <div>
            
            <Provider increment={this.increment}>
            <B count={this.count}/>
            </Provider>
            
            </div>
        )
    }
}
export default A

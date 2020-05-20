import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

export const withToggle = (WrappedComponent) => {
    @observer
    class Toggle extends React.Component {
        @observable toggleStatus = true
        onToggle = () => {
            alert("called from toogle")
            this.toggleStatus = !this.toggleStatus
            console.log("this.toggleStatus", this.toggleStatus)
        }

        render() {
            return (
                <WrappedComponent toggleStatus={this.toggleStatus}  onToggle={this.onToggle} {...this.props}/>
            )

        }
    }
    return Toggle



}

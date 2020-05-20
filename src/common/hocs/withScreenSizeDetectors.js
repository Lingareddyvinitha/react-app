import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

export const withScreenSizeDetectors = (WrappedComponent) => {
    @observer
    class SizeDetectors extends React.Component {
        @observable display = ""
        componentDidMount() {
            window.addEventListener("resize", this.updateDimensions);
        }
        updateDimensions = () => {
            if (window.innerWidth < 576) {
                this.display = "Mobile"
            }
            else if (window.innerWidth >= 576 && window.innerWidth < 992) {
                this.display = "Tablet"
            }
            else {
                this.display = "Desktop"
            }
        }
        render() {
            if (window.innerWidth < 576) {
                this.display = "Mobile"
            }
            else if (window.innerWidth >= 576 && window.innerWidth < 992) {
                this.display = "Tablet"
            }
            else {
                this.display = "Desktop"
            }
            return (
                <WrappedComponent  display={this.display} {...this.props}/>
            )

        }
    }
    return SizeDetectors



}

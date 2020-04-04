import React from 'react';
import { FaRegMoon } from 'react-icons/fa'
import { DarkOrLightMode, HeaderFile, DarkOrLightModeButton } from './styledComponents.js'
let shuffle = require('shuffle-array')
class Header extends React.Component {
    onChangeTheme = () => {
        this.props.onChangeTheme()
    }
    render() {
        const array = [1, 2, 3, 4];
        shuffle(array)
        console.log(array)

        return (
            <DarkOrLightMode mode={(this.props.selectedTheme === 'dark Mode') ?"dark":"light"}>
            <HeaderFile>
            <h3>Where in the World</h3>
            <DarkOrLightModeButton onClick={this.onChangeTheme} mode={(this.props.selectedTheme === 'dark Mode') ?"dark":"light"}>
            < FaRegMoon />{this.props.selectedTheme}</DarkOrLightModeButton>
            </HeaderFile>
            </DarkOrLightMode>
        )
    }
}
export default Header

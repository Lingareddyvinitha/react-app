import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import {
    Container,
    TopLevel,
    Group,
    Level,
    ThemeButton
}
from './styledComponent'
import levelData from '../../../stores/GridStore/level.json'

@observer
class Header extends React.Component {
    @observable level = 0
    @observable topLevel = 0

    onClickChangeTheme = () => {
        const { onClickChangeTheme, selectedTheme } = this.props
        onClickChangeTheme(selectedTheme.id)
    }

    render() {
        const { level, topLevel, selectedTheme } = this.props
        return (
            <Container width={levelData[level].gridWidth}>
            <TopLevel>TopLevel:{topLevel!==undefined?topLevel:this.topLevel}</TopLevel>
            <Group>
            <Level>Level:{level!==undefined?level:this.level}</Level>
            <ThemeButton onClick={this.onClickChangeTheme} selectedTheme={selectedTheme}>
            {selectedTheme.name}
            </ThemeButton>
            </Group>
            </Container>
        )
    }

}

export default Header

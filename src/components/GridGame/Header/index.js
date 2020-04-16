import React from 'react'
import { observer } from 'mobx-react'

import {
    Container,
    TopLevel,
    Group,
    Level,
    ThemeButton
}
from './styledComponent'

//@inject('selectedTheme')
@observer
class Header extends React.Component {
    constructor(props) {
        super(props)

    }
    onClickChangeTheme = () => {
        const { onClickChangeTheme, selectedTheme } = this.props
        onClickChangeTheme(selectedTheme.id)
    }
    render() {
        const { level, topLevel, selectedTheme } = this.props
        return (
            <Container>
            <TopLevel>TopLevel:{topLevel}</TopLevel>
            <Group>
            <Level>Level:{level}</Level>
            <ThemeButton onClick={this.onClickChangeTheme}>
            {selectedTheme.name}
            </ThemeButton>
            </Group>
            </Container>
        )
    }

}

export default Header

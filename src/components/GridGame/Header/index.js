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

@observer
class Header extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { level, topLevel } = this.props
        return (
            <Container>
            <TopLevel>TopLevel:{level}</TopLevel>
            <Group>
            <Level>Level:{topLevel}</Level>
            <ThemeButton>
            button
            </ThemeButton>
            </Group>
            </Container>
        )
    }

}

export default Header

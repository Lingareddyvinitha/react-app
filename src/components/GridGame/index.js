import React from 'react'
import { observer } from 'mobx-react'

import gridStore from '../../stores/GridStore'
import newThemeStore from '../../stores/NewThemeStore'
import { Container } from './styledComponent'
import Header from './Header'
import GameField from './GameField'

@observer
class GridMemoryGame extends React.Component {
    constructor(props) {
        super(props)
        gridStore.setGridCells()
    }
    getGridStore = () => {
        return gridStore
    }
    getThemeStore = () => {
        return newThemeStore;
    }
    render() {
        return (
            <Container backgroundColor={this.getThemeStore().selectedThemeForGridGame.gridGamePageBackgroundColor}>
            <Header 
            level={this.getGridStore().level}
            topLevel={this.getGridStore().topLevel}
            onClickChangeTheme={this.getThemeStore().onClickChangeTheme}
            selectedTheme={this.getThemeStore().selectedThemeForGridGame}
            />
            <GameField 
            cells={this.getGridStore().currentLevelGridCells}
            onCellClick={this.getGridStore().onCellClick}
            level={this.getGridStore().level}
            />
            </Container>
        )
    }

}

export default GridMemoryGame

import React from 'react'
import { observer } from 'mobx-react'

import gridStore from '../../stores/GridStore'
import newThemeStore from '../../stores/NewThemeStore'
import { Container, Group } from './styledComponent'
import Header from './Header'
import GameField from './GameField'
import GameResult from './GameResult'
import Graph from './Graph'

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
            <Container selectedTheme={this.getThemeStore().selectedThemeForGridGame}>
            
            <Header 
            level={this.getGridStore().level}
            topLevel={this.getGridStore().topLevel}
            onClickChangeTheme={this.getThemeStore().onClickChangeTheme}
            selectedTheme={this.getThemeStore().selectedThemeForGridGame}
            />
            
            {(this.getGridStore().isGameCompleted)?
                <GameResult 
                onPlayAgainClick={this.getGridStore().onPlayAgainClick}
                level={this.getGridStore().level}
                gridGamePageBackgroundColor={this.getThemeStore().selectedThemeForGridGame.gridGamePageBackgroundColor}
                textColor={this.getThemeStore().selectedThemeForGridGame.textColor}
                /> :
                <Group>
                <GameField 
            cells={this.getGridStore().currentLevelGridCells}
            onCellClick={this.getGridStore().onCellClick}
            level={this.getGridStore().level}
            selectedTheme={this.getThemeStore().selectedThemeForGridGame}
            />
             <Graph />
            </Group>
            
            }
            </Container>
        )
    }

}

export default GridMemoryGame

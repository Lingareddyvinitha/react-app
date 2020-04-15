import React from 'react'
import { observer } from 'mobx-react'

import gridStore from '../../stores/GridStore'
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
    render() {
        return (
            <Container>
            <Header 
            level={this.getGridStore().level}
            topLevel={this.getGridStore().topLevel}
            />
            <GameField 
            cells={this.getGridStore().currentLevelGridCells}
            onCellClick={this.getGridStore().onCellClick}
            />
            </Container>
        )
    }

}

export default GridMemoryGame

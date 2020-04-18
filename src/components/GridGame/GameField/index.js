import React from 'react'

import levelData from '../../../stores/GridStore/level.json'
import Cell from '../Cell'
import { GameArea } from './styledComponents'

class GameField extends React.Component {

    renderCells = () => {
        const { cells, onCellClick, level, selectedTheme } = this.props
        let setTime = (levelData[level].gridSize) * 1000
        return (cells.map(cell => {
            return <Cell key={cell.id} cell={cell} onCellClick={onCellClick} 
            level={level}  selectedTheme={selectedTheme} setTime={setTime}/>
        }))
    }

    render() {
        const { level } = this.props
        return (
            <GameArea width={levelData[level].gridWidth}>
            { this.renderCells() }
            </GameArea>
        )
    }

}

export default GameField

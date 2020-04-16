import React from 'react'
import { observer } from 'mobx-react'

import levelData from '../../../stores/GridStore/level.json'
import Cell from '../Cell'
import { GameArea } from './styledComponents'

@observer
class GameField extends React.Component {
    constructor(props) {
        super(props)

    }
    renderCells = () => {
        const { cells, onCellClick, level } = this.props
        return (cells.map(cell => {
            return <Cell key={cell.id} cell={cell} onCellClick={onCellClick} level={level}/>
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

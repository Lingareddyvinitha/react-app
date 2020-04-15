import React from 'react'
import { observer } from 'mobx-react'


import Cell from '../Cell'
import { GameArea } from './styledComponents'

@observer
class GameField extends React.Component {
    constructor(props) {
        super(props)

    }
    renderCells = () => {
        const { cells, onCellClick } = this.props
        return (cells.map(cell => {
            return <Cell key={cell.id} cell={cell} onCellClick={onCellClick}/>
        }))
    }

    render() {
        return (
            <GameArea>
            { this.renderCells() }
            </GameArea>
        )
    }

}

export default GameField

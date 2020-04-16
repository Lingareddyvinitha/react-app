import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import levelData from '../../../stores/GridStore/level.json'
import { Grid } from './styledCompoenent'

@observer
class Cell extends React.Component {
    @observable shouldShowHiddenCells
    @observable isClickedOnCell

    constructor(props) {
        super(props)
        const { cell } = this.props
        this.shouldShowHiddenCells = cell.isHidden
        this.isClickedOnCell = false


    }
    async componentDidMount() {
        const { level } = this.props;
        let setTime = (levelData[level].gridSize) * 1000

        setTimeout(() => {
            this.shouldShowHiddenCells = false;
        }, setTime)
    }

    onCellClick = () => {
        this.isClickedOnCell = true
        const { onCellClick, cell } = this.props
        onCellClick(cell.id);
    }
    render() {
        const { level } = this.props
        return (
            <Grid onClick={this.onCellClick} colored={this.shouldShowHiddenCells} clicked={this.isClickedOnCell}
            width={levelData[level].cellWidth}>
            </Grid>
        )
    }

}

export default Cell

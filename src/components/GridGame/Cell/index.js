import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import levelData from '../../../stores/GridStore/level.json'
import { Grid } from './styledCompoenent'

@observer
class Cell extends React.Component {

    @observable shouldShowHiddenCells
    @observable isClickedOnCell
    @observable istimerCompletedforDisplayingHiddenCells

    constructor(props) {
        super(props)
        const { cell } = this.props
        this.shouldShowHiddenCells = cell.isHidden
        this.isClickedOnCell = false
        this.istimerCompletedforDisplayingHiddenCells = false
    }

    componentDidMount() {
        const { setTime } = this.props;


        setTimeout(() => {
            this.shouldShowHiddenCells = false;
            this.istimerCompletedforDisplayingHiddenCells = true
        }, setTime)
    }

    onCellClick = () => {

        if (!this.isClickedOnCell) {
            const { onCellClick, cell } = this.props
            onCellClick(cell.isHidden, cell.id);
        }
        this.isClickedOnCell = true
    }

    render() {
        const { level, selectedTheme, cell } = this.props
        return (
            <Grid onClick={this.onCellClick} 
            colored={this.shouldShowHiddenCells} 
            clicked={this.isClickedOnCell}
            width={levelData[level].cellWidth}
            selectedTheme={selectedTheme}
            isHidden={cell.isHidden}
            disabled={!this.istimerCompletedforDisplayingHiddenCells}
            ></Grid>
        )
    }

}

export default Cell

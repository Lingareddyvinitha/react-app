import React from 'react'
import { observer } from 'mobx-react'

import { Grid } from './styledCompoenent'
@observer
class Cell extends React.Component {

    onCellClick = () => {
        const { onCellClick, cell } = this.props
        onCellClick(cell.id);
    }
    render() {
        const { cell } = this.props
        return (
            <Grid onClick={this.onCellClick} >
            </Grid>
        )
    }

}

export default Cell

import React from 'react';
class SelectRegion extends React.Component {
    constructor(props) {
        super(props)
    }
    onChangeSelectedRegion = (event) => {
        this.props.onChangeSelectedRegion(event.target.value)
    }
    render() {
        const regions = this.props.regionOptions
        const selectedTheme = this.props.selectedTheme
        return (
            <div>
            <select onChange={this.onChangeSelectedRegion} className={(selectedTheme==='dark Mode')?`select-options-group-dark`:`select-options-group-light`}>
            {regions.map((region)=><option value={region}>{region}</option>)}
          </select>
          </div>
        )
    }
}
export default SelectRegion

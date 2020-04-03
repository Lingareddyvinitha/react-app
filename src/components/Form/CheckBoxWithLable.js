import React from "react"
class CheckboxWithLabel extends React.Component {
    constructor(props) {
        super(props);
        this.city = this.props.lable
    }
    handleCheckboxClick = (event) => {
        this.props.handleCheckboxClick(event.target.value, event.target.checked);
    }
    render() {
        return (
            <div>
            <label>
          <input type="checkBox" value={this.city} onChange={this.handleCheckboxClick} />
          {this.city}
        </label><br/>
        </div>
        )
    }
}
export default CheckboxWithLabel;

import React from "react";

import { NoDataViewContainer, NoDataViewText } from "./styledComponents";

class NoDataView extends React.Component {
  defaultProps = {
    color: "black",
  };
  render() {
    const { color } = this.props
    return (
      <NoDataViewContainer>
        <NoDataViewText color={color}>No data found!</NoDataViewText>
      </NoDataViewContainer>
    );
  }
}

export default NoDataView;

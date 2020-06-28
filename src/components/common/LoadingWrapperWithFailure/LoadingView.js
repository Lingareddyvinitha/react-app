import React from "react";

import Loader from "../Icons/Loader";

import { LoadingViewContainer } from "./styledComponents";

class LoadingView extends React.Component {
  render() {
    return (
      <LoadingViewContainer>
        <Loader fill={this.props.fill}/>
      </LoadingViewContainer>
    );
  }
}

export default LoadingView;

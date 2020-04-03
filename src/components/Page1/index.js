import React from "react";
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import logo from "../../logo.svg";
import Page1Styles from './styledComponents.js'
//bg-gray-800 h-screen flex justify-center items-center flex-col
function Page1() {
    return (
        <Page1Styles>
        <img src={logo} className="App-logo" alt="logo" />
        <div>veeru</div>
      <h1 className={"text-white"}>Page 1</h1>
      </Page1Styles>);
}

export default Page1;

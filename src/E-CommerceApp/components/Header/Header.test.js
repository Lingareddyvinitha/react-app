/*global expect*/
import React from "react";
import { render } from "@testing-library/react";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import Header from ".";

describe("Header", () => {
    it("should give productCount", () => {
        const productCount = 6
        const { getByText } = render(

            <Header productCount={productCount}/>
        );
        getByText("6Products(s) found")






    });
});

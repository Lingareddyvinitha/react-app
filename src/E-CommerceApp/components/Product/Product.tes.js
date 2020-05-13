/*global expect*/
import React from "react";
import { render } from "@testing-library/react";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import Header from ".";
import EcommerceStore from '../../stores/EcommerceStore'
describe("Product", () => {
    it("should test getCartStore", () => {

        const productCount = 6
        const { getByText } = render(
            <Provider {...EcommerceStore}>

            <Product productCount={productCount}/>
            </Provider>

        );

        getByText("6Products(s) found")






    });
});

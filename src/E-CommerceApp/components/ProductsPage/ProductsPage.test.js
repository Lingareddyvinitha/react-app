/*global expect*/
import React from "react";
import { render } from "@testing-library/react";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import getProductListResponse from '../../fixtures/getProductListResponse.json'
import EcommerceStore from '../../stores/EcommerceStore'
import { Provider } from 'mobx-react'
import ProductsPage from ".";

describe("ProductsPage", () => {
    it("should give 200 as status is give loading", () => {
        const getProductListAPIStatus = API_SUCCESS;
        const getProductListAPIError = null
        const sortedAndFilteredProducts = getProductListResponse
        const availableSizes = ['S', "XS", "M", "L", "XS", "XL"]
        const { getByTestId, debug } = render(
            <Provider {...EcommerceStore}>
            <ProductsPage sortedAndFilteredProducts={sortedAndFilteredProducts}
            availableSizes={availableSizes}/>
            </Provider>
        );
        debug()
        const displayProducts = getByTestId("ProductsPage-render")
        expect(displayProducts).toBeInTheDocument();
    });
});

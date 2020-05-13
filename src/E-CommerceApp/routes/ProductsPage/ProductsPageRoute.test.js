/*global jest*/
/*global expect*/
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import E_COMMERCE_SIGN_IN_PATH from "../../constants/APIConstants";
import E_COMMERCE_PRODUCTS_PATH from "../../constants/APIConstants";
import ProductService from '../../services/ProductService'
import getProductListResponse from '../../fixtures/getProductListResponse.json'
import EcommerceStore from '../../stores/EcommerceStore'
import stores from '../../../stores'
import { ProductStore } from '../../stores/ProductStore'
import { ProductsPageRoute } from '.'
import AuthService from '../../../Authentication/services/Authentication'
import AuthStore from '../../../Authentication/stores/AuthStore'
import CartStore from '../../stores/CartStore'

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));

describe("products page route", () => {
    let productService;
    let productStore;
    let authService;
    let authStore;
    let cartStore;

    beforeEach(() => {
        authService = new AuthService()
        authStore = new AuthStore(authService)
        productService = new ProductService();
        productStore = new ProductStore(productService);
        cartStore = new CartStore()
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    it("sholud test the api status is fetching", () => {
        const { getByText, getByRole } = render(
            <Provider 
            productStore={productStore}
            productService={productService}
            authService={authService}
            authStore={authStore}
            cartStore={cartStore}
            >
            <Router history={createMemoryHistory()}>
        <ProductsPageRoute />
      </Router>
      </Provider>
        );
        //const doNetworkCalls = jest.fn();
        //doNetworkCalls.mockReturnValue(getProductListResponse);

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockgetProductListAPI = jest.fn();
        mockgetProductListAPI.mockReturnValue(mockLoadingPromise);
        productService.getProductListAPI = mockgetProductListAPI;
        expect(productStore.getProductListAPIStatus).toBe(100);
    })
    it("sholud test the api status is success", async() => {
        const { getByText, getByRole, debug } = render(
            <Provider 
            productStore={productStore}
            productService={productService}
            authService={authService}
            authStore={authStore}
            cartStore={cartStore}
            >
            <Router history={createMemoryHistory()}>
        <ProductsPageRoute  />
      </Router>
      </Provider>
        );
        //const doNetworkCalls = jest.fn();
        //doNetworkCalls.mockReturnValue(getProductListResponse);

        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProductListResponse)
        });
        const mockgetProductListAPI = jest.fn();
        mockgetProductListAPI.mockReturnValue(mockSuccessPromise);
        productService.getProductListAPI = mockgetProductListAPI;
        //productStore.getProductList()
        await waitFor(() => { expect(productStore.getProductListAPIStatus).toEqual(200) });
    })
    /*
    it("sholud test the api status is failure", async() => {
        const { getByText, getByRole, debug } = render(
            <Provider 
            productStore={productStore}
            productService={productService}
            authService={authService}
            authStore={authStore}
            cartStore={cartStore}
            >
            <Router history={createMemoryHistory()}>
        <ProductsPageRoute productStore={productStore} />
      </Router>
      </Provider>
        );
        //const doNetworkCallmockSuccessPromises = jest.fn();
        //doNetworkCalls.mockReturnValue(getProductListResponse);

        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"))
        });
        const mockgetProductListAPI = jest.fn();
        mockgetProductListAPI.mockReturnValue(mockFailurePromise);
        productService.getProductListAPI = mockgetProductListAPI;
        //productStore.getProductList()
        await waitFor(() => { expect(productStore.getProductListAPIStatus).toBe(400) });
    })*/

    it("sholud test signOut function", async() => {
        const { getByText, getByRole, debug, getByTestId } = render(
            <Provider 
            productStore={productStore}
            productService={productService}
            authService={authService}
            authStore={authStore}
            cartStore={cartStore}
            >
            <Router history={createMemoryHistory()} path={E_COMMERCE_PRODUCTS_PATH}>
        <ProductsPageRoute  />
      </Router>
      <Router history={createMemoryHistory()} path={E_COMMERCE_SIGN_IN_PATH}>
        <LocationDisplay  />
      </Router>
      </Provider>
        );
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProductListResponse)
        });
        const mockgetProductListAPI = jest.fn();
        mockgetProductListAPI.mockReturnValue(mockSuccessPromise);
        productService.getProductListAPI = mockgetProductListAPI;
        const signOutButton = getByRole("button", { name: "Sign Out" });
        fireEvent.click(signOutButton)
        debug()
        expect(getByTestId("location-display")).toBeInTheDocument()
    })
});

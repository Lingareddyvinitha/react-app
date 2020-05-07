/*global expect*/
/*global jest*/
import React from 'react'
import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from "@ib/api-constants";
import ProductService from '../../services/ProductService'
import { ProductStore } from './ProductStore.js'
import getProductListResponse from '../../fixtures/getProductListResponse.json'
import Ascending from '../../utils/sortingTesting'
import "@testing-library/jest-dom/extend-expect";

import Cookie from "js-cookie";

let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();
let mockGetCookie = jest.fn();

Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;
Cookie.get = mockGetCookie;

global.mockSetCookie = mockSetCookie;
global.mockRemoveCookie = mockRemoveCookie;
global.mockGetCookie = mockGetCookie;

describe("ProductStore Tests", () => {
    let productsAPI;
    let productsStore;

    beforeEach(() => {
        productsAPI = new ProductService();
        productsStore = new ProductStore(productsAPI);
    });

    it("should test initialising product store", () => {
        expect(productsStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productsStore.getProductListAPIError).toBe(null);
        expect(productsStore.sortBy).toBe("SELECT")

    });

    it("should test ProductListAPI data fetching state", () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockProductListAPI = jest.fn();
        mockProductListAPI.mockReturnValue(mockLoadingPromise);
        productsAPI.getProductListAPI = mockProductListAPI;
        productsStore.getProductList();
        expect(productsStore.getProductListAPIStatus).toBe(API_FETCHING);
    });

    it("should test ProductListAPI success state", async() => {
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getProductListResponse);
        });
        const mockProductListAPI = jest.fn();
        mockProductListAPI.mockReturnValue(mockSuccessPromise);
        productsAPI.getProductListAPI = mockProductListAPI;
        await productsStore.getProductList();
        expect(productsStore.getProductListAPIStatus).toBe(API_SUCCESS);
    });

    it("should test ProductListAPI failure state", async() => {
        jest
            .spyOn(productsAPI, "getProductListAPI")
            .mockImplementation(() => Promise.reject())
        await productsStore.getProductList();
        expect(productsStore.getProductListAPIStatus).toBe(API_FAILED);
    });

    it("should test onChangeSortBy by selecting perticular sort", () => {
        productsStore.onChangeSortBy("ASCENDING")
        expect(productsStore.sortBy).toBe("ASCENDING")
    });

    it("shold test to add or delete based whether that size is present or not in the selected size", () => {
        productsStore.sizeFilter = ['S']
        productsStore.onSelectSize('S', false)
        expect(productsStore.sizeFilter).toEqual([])

    })

    it("shold test to add or delete based whether that size is present or not in the selected size", () => {
        productsStore.sizeFilter = ['L']
        productsStore.onSelectSize('S', true)
        expect(productsStore.sizeFilter).toEqual(['L', 'S'])

    })

    it("should test ProductList will come in Ascending order when I select S", () => {
        productsStore.setProductListResponse(getProductListResponse)
        productsStore.sortBy = "ASCENDING"
        productsStore.sizeFilter = ['S']
        const sortedProducts = productsStore.sortedAndFilteredProducts
        expect(sortedProducts[0].title).toBe(getProductListResponse[3].title)
        expect(sortedProducts[1].title).toBe(getProductListResponse[9].title)

    });

    it("should test ProductList will come in DESCENDING order when I select S", () => {
        productsStore.setProductListResponse(getProductListResponse)
        productsStore.sortBy = "DESCENDING"
        productsStore.sizeFilter = ['S']
        const sortedProducts = productsStore.sortedAndFilteredProducts
        expect(sortedProducts[0].title).toBe(getProductListResponse[9].title)
        expect(sortedProducts[1].title).toBe(getProductListResponse[3].title)

    });

    it("should test ProductList will come when I only select S", () => {
        productsStore.setProductListResponse(getProductListResponse)
        productsStore.sortBy = "SELECT"
        productsStore.sizeFilter = ['S']
        const sortedProducts = productsStore.sortedAndFilteredProducts
        expect(sortedProducts[0].title).toBe(getProductListResponse[3].title)
        expect(sortedProducts[1].title).toBe(getProductListResponse[9].title)

    });


    it("should test ProductList will come in Ascending order when I did not select any thing", () => {
        productsStore.setProductListResponse(getProductListResponse)
        productsStore.sortBy = "ASCENDING"
        productsStore.sizeFilter = []
        let sortedProducts = productsStore.sortedAndFilteredProducts
        expect(sortedProducts[0].title).toBe(getProductListResponse[1].title)
    });

    it("should test ProductList will come in DESCENDING order when I did not select any thing", () => {
        productsStore.setProductListResponse(getProductListResponse)
        productsStore.sortBy = "DESCENDING"
        productsStore.sizeFilter = []
        let sortedProducts = productsStore.sortedAndFilteredProducts
        expect(sortedProducts[0].title).toBe(getProductListResponse[8].title)
    });

    it("sholud availableSizes will come", () => {
        productsStore.productList = [...getProductListResponse]
        expect(productsStore.availableSizes).toEqual(['M', 'L', 'XL', 'S', 'XXL', 'XS'])

    });

    it("should come all intial states when we clear store ", () => {
        productsStore.clearStore()
        expect(productsStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productsStore.getProductListAPIError).toBe(null);
        expect(productsStore.sortBy).toBe("SELECT")

    })

    it("should test totalNoOfProductsDisplayed after sorting", () => {
        productsStore.setProductListResponse(getProductListResponse)
        productsStore.sortBy = "ASCENDING"
        productsStore.sizeFilter = ['S']
        const totalNoOfProductsDisplayed = productsStore.totalNoOfProductsDisplayed
        expect(totalNoOfProductsDisplayed).toBe(2)

    })







});

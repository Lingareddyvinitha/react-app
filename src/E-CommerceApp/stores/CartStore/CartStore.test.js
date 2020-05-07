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
import { ProductStore } from '../ProductStore'
import CartStore from '.'
import getProductListResponse from '../../fixtures/getProductListResponse.json'
//import CartModel from './models/CartModel'
import "@testing-library/jest-dom/extend-expect";

describe("CartStore Tests", () => {
    let productStore
    let cartStore;
    //let cartModel;

    beforeEach(() => {
        productStore = new ProductStore()
        cartStore = new CartStore(productStore);
    });

    it("should test initialising cart store", () => {
        expect(cartStore.cartProductList).toEqual([]);

    });
    it("should test onRemoveCartItem", () => {
        cartStore.onClickAddToCart(getProductListResponse[0])
        cartStore.onRemoveCartItem(getProductListResponse[0])
        expect(cartStore.cartProductList.length).toBe(1)
    });

    it("should test the clearCart", () => {
        cartStore.clearCart()
        expect(cartStore.cartProductList).toEqual([]);
    });

    it("should test onClickAddToCart", () => {
        cartStore.onClickAddToCart(getProductListResponse[0])
        expect(cartStore.cartProductList.length).toBe(1)
        cartStore.onClickAddToCart(getProductListResponse[1])
        expect(cartStore.cartProductList.length).toBe(2)

    });
    it("should test incrementQuantity", () => {
        cartStore.onClickAddToCart(getProductListResponse[0])
        cartStore.onClickAddToCart(getProductListResponse[0])
        expect(cartStore.cartProductList[0].quantity).toBe(2)
    })

    it("should test totalCartAmount", () => {
        cartStore.onClickAddToCart(getProductListResponse[0])
        cartStore.onClickAddToCart(getProductListResponse[1])
        const totalCartAmount = cartStore.totalCartAmount
        expect(totalCartAmount).toEqual("2959.88")

    })
    /*
    it("should test totalCartAmount",()=>{
        
    })*/


});

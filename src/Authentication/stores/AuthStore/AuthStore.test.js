/* global jest * /
/*global expect*/
/*global mockSetCookie*/
/*global mockRemoveCookie*/
//import React from 'react'
import {
    API_SUCCESS,
    API_FAILED,
    API_FETCHING,
    API_INITIAL
}
from "@ib/api-constants";

import AuthService from "../../services/Authentication";
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";

import AuthStore from "./AuthStore";

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

describe("AuthStore Tests", () => {
    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthService();
        authStore = new AuthStore(authAPI);
    });

    it("should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });

    it("should test userSignInAPI data fetching state", () => {
        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
    });

    it("should test userSignInAPI success state", async() => {
        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getUserSignInResponse);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;

        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
        expect(mockSetCookie).toBeCalled();
    });

    it("should test userSignInAPI failure state", async() => {
        jest
            .spyOn(authAPI, "getUserSignInAPI")
            .mockImplementation(() => Promise.reject())
        /*
        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject();
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.signInAPI = mockSignInAPI;*/
        authStore = new AuthStore(authAPI);
        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
    });
    it("should test user sign-out", () => {
        authStore.userSignOut();
        expect(mockRemoveCookie).toBeCalled();
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });




});

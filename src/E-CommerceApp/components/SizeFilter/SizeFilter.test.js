/*global expect*/
/*global jest*/
import React from "react";
import { render } from "@testing-library/react";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import SizeFilter from ".";

describe("SizeFilter", () => {
    it("should renderEachSize", () => {
        const renderEachSize = jest.fn()
        const availableSizes = ['S', "XS", "M", "L", "XS", "XL"]
        const { getByText, debug } = render(
            <SizeFilter availableSizes={availableSizes} />
        );
        debug()
        getByText(/Sizes:/)






    });
});

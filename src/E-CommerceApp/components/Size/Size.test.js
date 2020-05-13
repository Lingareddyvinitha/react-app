/*global expect*/
/*global jest*/
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import Size from ".";

describe("Size", () => {
    it("should test EachSize is visible in UI", () => {
        const renderEachSize = jest.fn()
        const eachSize = 'S'
        const { getByText, debug } = render(
            <Size eachSize={eachSize} />
        );
        debug()
        getByText(/S/i)
    });
    it("should test if we click the button  is background color change", () => {
        const onSelectSize = jest.fn()
        const eachSize = 'S'
        const { getByText, debug, getByRole } = render(
            <Size eachSize={eachSize} onSelectSize={onSelectSize} />
        );
        const sizeButton = getByRole("button", { name: "S" });
        fireEvent.click(sizeButton)
        expect(sizeButton).toHaveStyle(`
  	background-color: #1a202c;`)
        debug()

    });
});

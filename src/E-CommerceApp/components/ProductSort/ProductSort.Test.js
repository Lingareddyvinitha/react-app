/*global jest*/
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import ProductSort from ".";

describe("ProductSort", () => {
    it("should test EachSize is visible in UI", () => {
        const onSelectSortBy = jest.fn()
        onSelectSortBy.mockReturnValue("DESCENDING")
        const { getByText, debug, getByRole } = render(
            <ProductSort onSelectSortBy={onSelectSortBy} />
        );
        const Sorting = getByRole("option", { value: "SELECT" });
        fireEvent.change()
        debug()
    });

});

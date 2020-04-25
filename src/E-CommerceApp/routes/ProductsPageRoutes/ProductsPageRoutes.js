import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
from "react-router-dom";

import ProductsPage from "../../components/ProductsPage";

const routes = [
    <Route path="/Products-page" component={ProductsPage} />

];

export default routes;

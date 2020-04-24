import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
from "react-router-dom";

import SignInPage from "../components/SignInPage";

const routes = [
    <Route path="/sign-in-page" component={SignInPage} />

];

export default routes;

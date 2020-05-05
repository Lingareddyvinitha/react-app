import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
from "react-router-dom";

import { SignInRoute } from "./SignInRoutes";

const AuthRoutes = [
    <Route path="/sign-in-page" component={SignInRoute} />

];

export default AuthRoutes;

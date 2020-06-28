import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
from "react-router-dom";
import SignInPage from "../../Authentication/components/SignInPage";
import ProductsPage from "../../E-CommerceApp/components/ProductsPage";
import { getAccessToken } from '../../Authentication/utils/StorageUtils'
import { withRouter, Redirect } from "react-router-dom";
import AuthRoutes from "../../Authentication/routes";
//import TodoAppWithService from '../../components/TodoAppWithService'


export const ProtectedRoutes = ({ component: Component, ...other }) => {
    if (getAccessToken() === "f5af9f51-07e6-4332-8f1a-c0c11c1e3434") {
        return <Route component={Component} {...other} />
    }
    else {
        return <Redirect
      to={{pathname:'/sign-in-page'}}/>
        //return <Route path="/sign-in-page" component={SignInPage} />
    }

}

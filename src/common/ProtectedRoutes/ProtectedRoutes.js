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



export const ProtectedRoutes = ({ component: Component, ...other }) => {
    if (getAccessToken() === "f5af9f51-07e6-4332-8f1a-c0c11c1e3434") {
        return <Route {...other} render={
      props => <Component {...other} {...props} />
    }
    />
    //return (<Route path="/products-page" component={ProductsPage} />)
}
else {
    alert("hkhk")
    return (
        <Route exact path="/sign-in-page" component={SignInPage} />)
}

}

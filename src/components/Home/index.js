import React from 'react';
import {
  Link
}
from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/TodosList">TodosList</Link>
                  </li>
                  <li>
                    <Link to="/CountryList">CountryList</Link>
                  </li>
                  <li>
                    <Link to="/Example">Example</Link>
                  </li>
                  <li>
                    <Link to="/FormComponent">FormComponent</Link>
                  </li>
                  <li>
                    <Link to="/DashBoard">DashBoard</Link>
                  </li>
                </ul>
              </nav>
                  </div>
    );
  }
}
export default Home;

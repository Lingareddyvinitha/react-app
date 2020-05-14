/*
"use strict"
import React from "react"
import { observable, autorun, toJS } from 'mobx'
import { Provider, observer } from "mobx-react"

import B from './B'
import C from './C'
import store from './Store'

@observer
class A extends React.Component {

    @observable count = 1
    increment = () => {
        store.increment()
        this.count++
    }
    render() {
        let myObj = {
            firstName: "Obama",
            getAsyncData: function(cb) {
                console.log("getAsyncData")
                console.log(this.firstName)
                cb()
            },
            render: function() {
                console.log("render")
                console.log(this.firstName);
                this.getAsyncData(function() {
                    console.log("render in function")
                    console.log(this.firstName);
                })

            }
        }
        myObj.render();
        
        return (
            <div>
            
            <Provider increment={this.increment}>
            <B count={this.count}/>
            <C />
            </Provider>
            
            
            </div>
        )
    }
}
export default A*/

/*
import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, action, computed, autorun } from "mobx";

@observer
class A extends React.Component {
    @observable parentCounter = 12;

    @action.bound
    onParentCounterUpdate() {
        this.parentCounter += 1;
    }

    render() {
        console.log("render CounterParent");
        return (
            <CounterChild
        onParentCounterUpdate={this.onParentCounterUpdate}
        parentCounter={this.parentCounter}
        
      />
        );
    }
}

@observer
class CounterChild extends React.Component {
    @observable childCounter1 = 301;
    @observable childCounter2 = 14;
    @observable childCounter3 = 8

    @computed get total() {
        console.log("computed")
        return `${this.childCounter1} + ${this.childCounter2}`
    }


    //@action.bound
    onUpdate = () => {
        const { onParentCounterUpdate } = this.props;
        onParentCounterUpdate();
        //onParentCounterUpdate();
        this.childCounter1 += 1;
        this.childCounter2 += 0;
        //this.childCounter1 += 1;
        //this.childCounter3 += 1;
    }

    disposer = autorun(reaction => {
        console.log("auto run", `${this.childCounter1}  $ {this.childCounter2}`)
    })

    render() {
        console.log("render CounterChild");
        const { parentCounter } = this.props;

        return (
            <div>
            <div>total:{this.total}</div>
        <button onClick={this.onUpdate}>Update count</button>
      </div>
        );
    }
}

//render(<CounterParent />, document.getElementById("root"));
export default A

*/
/*
"use strict";
import React, { Component } from "react";
import { render } from "react-dom";
import { toJS } from 'mobx'

class A extends Component {
    state = {
        count: 232,
    };

    prevState = this.state;
    nextState = this.state;
    nextState = this.state;
    updateCount = () => {
        this.prevState = this.state;
        this.setState({
            count: 232,
        });
    };

    render() {
        this.nextState = this.state;
        console.log("this.nextState", this.nextState)
        console.log("this.prevState", this.prevState)
        console.log(this.nextState === this.prevState);
        console.log(this.nextState.count === this.prevState.count);

        return (
            <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.updateCount}>Update Count</button>
      </div>
        );
    }
}
export default A;
*/



/*
import React, { Component } from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class A extends Component {
    @observable state = {
        name: "Michael",
        address: {
            city: "Hyderabad",
            country: "India",
        },
    };

    prevCityState = this.state.address.city;
    nextCityState = this.state.address.city;

    updateAddress = () => {
        this.prevCityState = this.state.address.city;
        this.state.address.city = "Delhi";
    };

    render() {
        this.nextCityState = this.state.address.city;
        console.log(this.nextCityState === this.prevCityState);

        return (
            <div>
        <p>Name: {this.state.name}</p>
        <p>City: {this.state.address.city}</p>
        <p>Name: {this.state.address.country}</p>
        <button onClick={this.updateAddress}>Update address</button>
      </div>
        );
    }
}
export default A
*/
/*
import React, { Component } from "react";
import { render } from "react-dom";
import { inject, Provider, observer } from "mobx-react";
import { observable, action } from "mobx";

@inject("appStore")
@observer
class Message extends Component {
    message;
    constructor(props) {
        super(props);
        this.message = this.props.appStore.message;
    }

    onChangeTitle = () => {
        const { onChangeTitle } = this.props.appStore;
        onChangeTitle("Hi");
    };

    render() {
        alert("render")
        return (
            <div>
        <p>Message title: {this.message.title}</p>
        <button onClick={this.onChangeTitle}>Change title</button>
      </div>
        );
    }
}

class A extends Component {
    render() {
        return (
            <Provider appStore={appStore}>
        <Message />
      </Provider>
        );
    }
}

class AppStore {
    @observable message = {
        title: "Hello",
    };

    @action.bound
    onChangeTitle(title) {
        this.message.title = title;
    }
}

const appStore = new AppStore();

export default A
*/
/*
import React, { Component } from "react";
import { render } from "react-dom";

class A extends Component {
    state = {
        name: "Michael",
        address: {
            city: "Hyderabad",
            country: "India",
        },
    };

    prevState = this.state;
    nextState = this.state;

    updateAddress = () => {
        this.prevState = this.state;
        this.setState({
            ...this.state,
            address: {
                ...this.state.address,
                city: "Delhi",
            },
        });
    };

    render() {
        let a = { name: "sai", room: 1 }
        let b = { name: "vini", room: 0 }
        b = { ...a, room: 3 }
        console.log("b", b)
        console.log("state", this.state)
        this.nextState = this.state;
        console.log(this.nextState === this.prevState);
        console.log(this.nextState.name === this.prevState.name);

        return (
            <div>
        <p>Name: {this.state.name}</p>
        <p>City: {this.state.address.city}</p>
        <p>Name: {this.state.address.country}</p>
        <button onClick={this.updateAddress}>Update address</button>
      </div>
        );
    }
}
export default A
*/
import React, { Component } from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable, computed, action } from "mobx";

@observer
class A extends Component {
    @observable mobxNumbers = [1, 2, 3, 4, 5];
    @observable jsNumbers = [1, 2, 3, 4, 5];

    @computed
    get mobxNumbersReverse() {
        return this.mobxNumbers.reverse();
    }
    @action.bound
    jsNumbersReverse() {
        return this.jsNumbers.reverse();
    }

    render() {
        return (
            <div>
        <p>
          {this.mobxNumbersReverse[0]}, {this.mobxNumbers[0]}
        </p>
        <p>
          {this.jsNumbersReverse()[0]}, {this.jsNumbers[0]}
        </p>
      </div>
        );
    }
}

export default A

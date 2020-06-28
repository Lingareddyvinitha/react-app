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
    @observable count1 = 0
    @observable count2 = 0
    @observable count = 1
    @observable value = ""
    increment = () => {
        //store.increment()
        this.count++

            this.decrement()
    }
    decrement = () => {
        this.count1++;
        this.count2++
    }
    change = (event) => {
        console.log(event.target.value);
    }


    render() {
        console.log("render called")
        return (
            <div>
            <div>count1:{this.count1}</div>
            <div>count1:{this.count2}</div>
            <div>count:{this.count}</div>
            <input value="" onChange={this.change}/>
            <button onClick={this.increment}>button</button>
            
            
            </div>
        )
    }
}
export default A*/
/*
<Provider increment={this.increment} store={store}>
            <B count={this.count}/>
            <C />
            </Provider>*/

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
/*
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
*/
/*
import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

class AuthStore {
    @observable isSignedIn = false;

    onChange() {
        console.log("onChange isSignedIn");
        this.isSignedIn = !this.isSignedIn;
    }
}

const authStore = new AuthStore();

@observer
class A extends React.Component {
    onChange() {
        const { onChange } = authStore;
        onChange();
    }
    render() {
        const { isSignedIn } = authStore;
        console.log("isSignedIn:", isSignedIn);

        return <button onClick={this.onChange}>Sign In</button>;
    }
}

render(<A />, document.getElementById("root"));
*/
/*
import React from 'react'
import { observable, values, toJS } from "mobx";
class A extends React.Component {
    persons = observable(new Map());

    data = [{
            id: 1,
            name: "Sri Potti Sriramulu",
            city: "Nellore",
            state: "Andhra Pradesh",
        },
        {
            id: 2,
            name: "Pingali Venkayya",
            city: "Vijayawada",
            state: "Andhra Pradesh",
        },
        {
            id: 3,
            name: "Hanuma Vihari",
            city: "Kakinada",
            state: "Andhra Pradesh",
        },
    ];
    componentDidMount() {
        this.data.forEach((person) => {
            this.persons.set(person.id, person);
        });
        const cities2 = Array.from(this.persons.values())
        const cities3 = values(this.persons).map((person) => person.city);
        //const obj1 = { 1: { name: "vni" }, 2: { name: "chitra" } }
        //const cities5 = Array.from(this.obj1).map((person) => person.name);
        //console.log("cities5", values(obj1))
        const cities4 = this.persons.id
        console.log("cities4", toJS(cities4))
        console.log("cities2", cities2)
    }
    render() {

        
        const cities1 = [];
        for (const [key, value] of this.persons.entries()) {
            cities1.push(value.city);
        }

        const cities2 = Array.from(this.persons.values()).map((person) => person.city);

        const cities3 = values(this.persons).map((person) => person.city);

        const cities4 = this.persons.values().map((person) => person.city);
        return (<div>hi</div>)
    }
}
export default A*/
/*
import React from "react";
import { render } from "react-dom";

class ListItem extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        
        console.log("nextState", this);
        console.log("this.props.value", this.props.value)
        console.log("nextProps.value", nextProps)
        if (this.props.value === nextProps.value) {

            return false;
        }

        return true;
        //return false;
    }

    render() {
        console.log("new item");
        console.log("df", this.props.value)
        return <li>{this.props.value}</li>;
    }
}


class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numbers: [0, 10, 20] };
    }
    renderListItems = () => {
        const { numbers } = this.state;
        return numbers.map((number, index) => (
            <ListItem key={index} value={number} />
        ));
    };

    addNumberToList = () => {
        const { numbers } = this.state;

        this.setState({
            numbers: [...numbers, numbers.length * 10],
        });
    };

    render() {
        return (
            <div>
        <ul>{this.renderListItems()}</ul>
        <button onClick={this.addNumberToList}>Add number</button>
      </div>
        );
    }
}
export default A*/
// import React from 'react'
// const Display = (props) => {
//     return (<div>{props.children}</div>)
// }
// class A extends React.Component {
//     constructor(props) {
//         super(props);

//         this.textInput = null;

//         this.setTextInputRef = element => {
//             console.log("element", element)
//             this.textInput = element;
//         };

//         this.focusTextInput = () => {
//             // Focus the text input using the raw DOM API
//             if (this.textInput) this.textInput.focus();
//         };
//     }

//     componentDidMount() {
//         // autofocus the input on mount
//         this.focusTextInput();
//     }

//     render() {
//         // Use the `ref` callback to store a reference to the text input DOM
//         // element in an instance field (for example, this.textInput).
//         return (
//             <div>
//         <input
//           type="text"
//           ref={this.setTextInputRef}
//         />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focusTextInput}
//         />
//         <Display>chitra</Display>
//         <Display>{"vini"}</Display>
//         <Display>{[1,2,3]}</Display>
//         <Display>{1,2,3}</Display>
//         <Display>{false}</Display>
//         <Display>{undefined}</Display>
//         <Display>{null}</Display>
//         <Display/>
//       </div>
//         );
//     }
// }
//  export default A

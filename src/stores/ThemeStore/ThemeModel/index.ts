import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import themeStore from '../index.js'
//@observer
class ThemeModel {
    @observable theme;
    constructor(object) {
        console.log("model", object);
        this.object = object;
        this.theme = this.object.theme
    }
    @action.bound
    ToggleTheme() {
        if (this.theme === "light Mode") {
            this.theme = "dark Mode"
        }
        else {
            this.theme = "light Mode"
        }
    }
}


export default ThemeModel

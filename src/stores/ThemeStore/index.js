import { observable, action, toJS } from 'mobx';
//import {toJS} from 'mobx-react'
import ThemeModel from './ThemeModel'
class ThemeStore {
    @observable selectedTheme
    constructor() {
        this.selectedTheme = "light Mode"
        this.selectedThemes = [];
    }
    @action.bound
    setCurrentTheme() {
        if (this.selectedTheme === "light Mode") {
            this.selectedTheme = "dark Mode";
        }
        else {
            this.selectedTheme = "light Mode";
        }
        this.setCurrentTime();
    }

    @action.bound
    setCurrentTime() {
        this.time = new Date().toString();
        const info = {
            time: this.time,
            theme: this.selectedTheme
        }
        const themeModel = new ThemeModel(info)
        this.selectedThemes.push(themeModel);



    }
    @action.bound
    onClickThemeChange() {

    }
}
const themeStore = new ThemeStore();



export default themeStore;

import { observable, action } from 'mobx'

class NewThemeStore {
    @observable selectedThemeForGridGame = NewThemeStore.ThemeOptions.dark
    static ThemeOptions = {
        light: {
            id: "0",
            name: "Mode: Light",
            gridGamePageBackgroundColor: "#f7fafc",
            cellBackgroundColor: "#234e52",
            hiddenCellColor: "#38a169"
        },
        dark: {
            id: "1",
            name: "Mode: Dark",
            gridGamePageBackgroundColor: "#1a202c",
            cellBackgroundColor: "#2a4365",
            hiddenCellColor: "#90cdf4"
        }
    }
    @action.bound
    onClickChangeTheme(id) {
        alert(typeof id)
        if (id === "1") {
            this.selectedThemeForGridGame = NewThemeStore.ThemeOptions.light
            //console.log(NewThemeStore.ThemeOptions.light)
        }
        else {
            //alert("light")
            this.selectedThemeForGridGame = NewThemeStore.ThemeOptions.dark
        }
    }
}

const newThemeStore = new NewThemeStore()
export default newThemeStore

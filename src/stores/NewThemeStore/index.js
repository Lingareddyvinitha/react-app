import { observable, action } from 'mobx'

class NewThemeStore {
    @observable selectedThemeForGridGame = NewThemeStore.ThemeOptions.dark
    static ThemeOptions = {
        light: {
            id: "0",
            name: "Mode: Light",
            gridGamePageBackgroundColor: "#f7fafc",
            cellBackgroundColor: "#4a5568",
            hiddenCellColor: "#38a169",
            textColor: "black",
            wrongCell: "red"
        },
        dark: {
            id: "1",
            name: "Mode: Dark",
            gridGamePageBackgroundColor: "#1a202c",
            cellBackgroundColor: "#2a4365",
            hiddenCellColor: "#90cdf4",
            textColor: "white",
            wrongCell: "red"
        }
    }
    @action.bound
    onClickChangeTheme(id) {
        if (id === "1") {
            this.selectedThemeForGridGame = NewThemeStore.ThemeOptions.light
        }
        else {
            this.selectedThemeForGridGame = NewThemeStore.ThemeOptions.dark
        }
    }
}

const newThemeStore = new NewThemeStore()
export default newThemeStore

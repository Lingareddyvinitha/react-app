import { observable, action } from 'mobx';
class EmojiThemeStore {
    @observable selectedTheme
    constructor() {
        this.selectedTheme = EmojiThemeStore.themeOptions.light
    }
    static themeOptions = {
        light: {
            id: "0",
            name: "LIGHT THEME",
            backgroundcolorForNav: "white",
            backgroundcolorCards: "#c3dafe",
            backgroundcolorForCard: "white",
            textColor: "black"

        },
        dark: {
            id: "1",
            name: "DARK THEME",
            backgroundcolorForNav: "#4a5568",
            backgroundcolorCards: "#2d3748",
            backgroundcolorForCard: "#2b6cb0",
            textColor: "white"
        }
    }
    //@action.bound
    @action
    setCurrentTheme() {
        if (this.selectedTheme.id === "0") {
            this.selectedTheme = EmojiThemeStore.themeOptions.dark;
        }
        else {
            this.selectedTheme = EmojiThemeStore.themeOptions.light;
        }
    }
}
const emojiThemeStore = new EmojiThemeStore();

export default emojiThemeStore;

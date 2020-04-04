import React from 'react';
import { Header, GameName, TopScore, Score, ThemeButton } from './styledComponents.js'
class NavBar extends React.Component {

    render() {
        return (
            <Header>
            <GameName>EmojiGame</GameName>
            <Score>Score:0</Score>
            <TopScore>TopScore:0</TopScore>
            <ThemeButton>Theme</ThemeButton>
            </Header>
        );
    }
}
export default NavBar;

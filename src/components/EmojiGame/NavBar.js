import React from 'react';
import { Header, GameName, TopScore, Score, ThemeButton } from './styledComponents.js'
class NavBar extends React.Component {
    onChangeTheme = () => {
        this.props.onChangeTheme();
    }

    render() {
        const { score } = this.props;
        const { topScore } = this.props
        const { selectedTheme } = this.props;
        return (
            <Header theme={selectedTheme.backgroundcolor} textColor={selectedTheme.textColor}>
            <GameName>EmojiGame</GameName>
            <Score>Score:{score}</Score>
            <TopScore>TopScore:{topScore}</TopScore>
            <ThemeButton onClick={this.onChangeTheme}>{selectedTheme.name}</ThemeButton>
            </Header>
        );
    }
}
export default NavBar;

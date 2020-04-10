import React from 'react';
import { Header, Group, GameName, ScoresGroup, TopScore, Score, ThemeButton, Nav,NavSmallScreen } from './styledComponents.js'
class NavBar extends React.Component {
    onChangeTheme = () => {
        this.props.onChangeTheme();
    }

    render() {
        const { score } = this.props;
        const { topScore } = this.props
        const { selectedTheme } = this.props;
        return (
            <Header theme = { selectedTheme.backgroundcolorForNav } textColor = { selectedTheme.textColor }>
            <Group>
            <GameName>EmojiGame</GameName>
            <Nav>
            <ScoresGroup>
            <Score>Score:{score}</Score>
            <TopScore>TopScore:{topScore}</TopScore>
            </ScoresGroup>
            <ThemeButton onClick={this.onChangeTheme}>{selectedTheme.name}</ThemeButton>
            </Nav>
            </Group>
            <NavSmallScreen>
            <Score>Score:{score}</Score>
            <TopScore>TopScore:{topScore}</TopScore>
            </NavSmallScreen>
            </Header>
        );
    }
}
export default NavBar;

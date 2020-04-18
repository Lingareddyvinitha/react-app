import React from "react"

import { Container, Message, Level, PlayAgainButton } from './styledComponents'
class GameResult extends React.Component {

    onPlayAgainClick = () => {
        const { onPlayAgainClick } = this.props
        onPlayAgainClick();
    }

    render() {
        const { level, selectedTheme } = this.props
        console.log(selectedTheme);

        return (
            <Container selectedTheme={selectedTheme}>
            <Level>{level}</Level>
         <Message>Congratulation! You Completed all the levels</Message>
         <PlayAgainButton onClick={this.onPlayAgainClick}>Play Again</PlayAgainButton>
         </Container>
        )
    }

}
export default GameResult

import React from 'react';
import { Result, ShowScore, Message, PlayAgainButton } from './styledComponents.js'
class WinOrLose extends React.Component {
    playerReport = () => {
        const { gameState } = this.props;
        if (gameState === "LOSE") {
            return "You Lose!"
        }
        else {
            return "You Won!"
        }
    }
    playAgain = () => {
        this.props.playAgain();
    }
    render() {
        const { score } = this.props;
        return (
            <Result>
        <ShowScore>{score}</ShowScore>
        <Message color={this.playerReport()}>{this.playerReport()}</Message>
        <PlayAgainButton onClick={this.playAgain}>Play Again</PlayAgainButton>
        </Result>);
    }
}
export default WinOrLose;

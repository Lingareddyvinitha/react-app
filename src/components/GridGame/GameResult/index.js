import React from "react"

import { Container, Message, Level, PlayAgainButton } from './styledComponents'

export const ButtonPlayAgain = (props) => {
    return <PlayAgainButton onClick={props.onPlayAgainClick}>Play Again</PlayAgainButton>
}
class GameResult extends React.Component {
    static defaultProps = {
        size: "30",
    };
    onPlayAgainClick = () => {
        const { onPlayAgainClick } = this.props
        onPlayAgainClick();
    }

    render() {
        const { level, gridGamePageBackgroundColor, textColor, size } = this.props;
        return (
            <Container
            gridGamePageBackgroundColor={gridGamePageBackgroundColor}
            textColor={textColor}>
            <Level>{level}</Level>
         <Message size={size}>Congratulation! You Completed all the levels</Message>
         <PlayAgainButton onClick={this.onPlayAgainClick}>Play Again</PlayAgainButton>
         </Container>
        )
    }

}
export default GameResult

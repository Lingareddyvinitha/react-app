import React from 'react';
import { Card, EmojiImg, EmojiName } from './styledComponents.js'
class EmojiCard extends React.Component {
    onClickEmoji = () => {
        const { emoji: { id } } = this.props;
        this.props.onClickEmoji(id);
    }

    render() {
        const { emoji } = this.props;
        const { selectedTheme } = this.props;
        return (
            <Card onClick={this.onClickEmoji} theme={selectedTheme.backgroundcolorForCard} textColor={selectedTheme.textColor}>
        <EmojiImg src={emoji.avtar} alt={emoji.name}>
        </EmojiImg>
        <EmojiName>{emoji.name}</EmojiName>
        </Card>
        );
    }
}
export default EmojiCard;

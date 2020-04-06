import React from 'react';
import EmojiCard from './EmojiCard.js'
import { Cards } from './styledComponents.js'
class EmojiCards extends React.Component {
    onClickEmoji = (clickedEmojiId) => {
        this.props.onClickEmoji(clickedEmojiId);
    }
    renderEmojis = () => {
        const { emojis } = this.props
        const {selectedTheme}=this.props;
        return emojis.map(emoji => <EmojiCard key={emoji.name} emoji={emoji} onClickEmoji={this.onClickEmoji} selectedTheme={selectedTheme} />)
    }
    render() {
        return (
            <Cards>
        {this.renderEmojis()}
        </Cards>
        );
    }
}
export default EmojiCards;

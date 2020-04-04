import React from 'react';
import EmojiCard from './EmojiCard.js'
import { Cards } from './styledComponents.js'
class EmojiCards extends React.Component {
    renderEmojis = () => {
        const { emojis } = this.props
        return emojis.map(emoji => <EmojiCard key={emoji.name} emoji={emoji} />)
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

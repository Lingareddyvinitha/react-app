import React from 'react';
import { Card, EmojiImg, EmojiName } from './styledComponents.js'
class EmojiCard extends React.Component {

    render() {
        let { emoji } = this.props;
        return (
            <Card>
        <EmojiImg src={emoji.avtar} alt={emoji.name}>
        </EmojiImg>
        <EmojiName>{emoji.name}</EmojiName>
        </Card>
        );
    }
}
export default EmojiCard;

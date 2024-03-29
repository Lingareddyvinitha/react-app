import React from 'react';
import { observer } from 'mobx-react'
//import { configure } from 'mobx'
import NavBar from './NavBar.js'
import EmojiCards from './EmojiCards.js'
import HowToPlay from './HowToPlay.js'
import WinOrLose from './WinOrLose.js'
import { Container } from './styledComponents.js'
import emojiThemeStore from '../../stores/EmojiThemeStore'
let shuffle = require('shuffle-array')
//configure({ enforceActions: "observed" });
@observer
class EmojiGame extends React.Component {
    constructor(props) {
        super(props);
        this.emojiNames = ["Exploding Head",
            "Grinning Face with Sweat",
            "Smiling Face with Heart-Eyes",
            "Smirking Face",
            "Thinking Face",
            "Winking Face",
            "Grinning Face",
            "Crying Face",
            "Astonished Face",
            "Face with Tears of Joy",
            "Star-Struck",
            "Winking Face with Tongue",
        ]
        this.score = 0;
        this.topScore = 0
        this.state = {
            emojis: [],
            gameState: "PLAYING",
            //selectedTheme: EmojiGame.themeOptions.light
        }
    }

    componentDidMount() {
        this.getEmojies()
    }

    getCurrentTheme = () => {
        return emojiThemeStore.selectedTheme;
    }
    onChangeTheme = () => {
        emojiThemeStore.setCurrentTheme()
    }

    getEmojies = () => {
        let emojisArray = []
        this.emojiNames.forEach(emojiName => {
            let emoji = {
                id: this.emojiNames.indexOf(emojiName),
                isClicked: false,
                name: emojiName,
                avtar: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${this.emojiNames.indexOf(emojiName)+1}.png`
            };
            emojisArray = [...emojisArray, emoji];
        });
        this.setState({ emojis: emojisArray });
    }

    onClickEmoji = (clickedEmojiId) => {
        let clickedEmojiInfo = this.state.emojis.find(emoji => emoji.id === clickedEmojiId);

        if (this.score === this.state.emojis.length - 1 && clickedEmojiInfo.isClicked === false) {
            this.incrementScore();
            this.setState({ gameState: "WIN" });
        }

        else if (clickedEmojiInfo.isClicked === false) {
            this.incrementScore();
            this.shuffleEmojis();
            this.updateCardStatus(clickedEmojiInfo);
        }

        else {
            this.setState({ gameState: "LOSE" });
        }


    }

    shuffleEmojis = () => {
        this.setState({ emojis: shuffle(this.state.emojis) });
    }

    incrementScore = () => {
        //this.setState({ score: this.state.score + 1 })
        this.score = this.score + 1;
    }

    upDateTopScore = () => {
        if (this.topScore < this.score) {
            this.topScore = this.score;
        }
    }

    updateCardStatus = (clickedEmojiInfo) => {
        this.state.emojis = this.state.emojis.map(emoji => {
            if (emoji === clickedEmojiInfo) {
                emoji.isClicked = true;
            }
        });

    }

    setDefaultCardStatus = () => {
        this.state.emojis = this.state.emojis.map(emoji => {
            emoji.isClicked = false;
            return emoji;
        });
    }

    playAgain = () => {
        this.setDefaultCardStatus();
        this.upDateTopScore();
        this.score = 0
        this.setState({
            gameState: "PLAYING",
        });
    }
    /*
    onChangeTheme = () => {
        if (this.state.selectedTheme.name === 'LIGHT THEME') {
            this.setState({ selectedTheme: EmojiGame.themeOptions.dark })
        }
        else {
            this.setState({ selectedTheme: EmojiGame.themeOptions.light })
        }
    }*/

    render() {
        const { emojis } = this.state;
        const { gameState } = this.state;
        const score = this.score;
        const topScore = this.topScore;
        const theme = this.getCurrentTheme();
        return (
            <Container theme={theme.backgroundcolorForCards} textColor={theme.textColor}>
            <NavBar score={score} topScore={topScore} onChangeTheme={this.onChangeTheme} selectedTheme={theme} />
            {(gameState==="PLAYING")?
            <EmojiCards emojis={emojis} onClickEmoji={this.onClickEmoji} selectedTheme={theme}/>
            :<WinOrLose gameState={gameState} score={score} playAgain={this.playAgain} selectedTheme={theme} />
            }
            <HowToPlay selectedTheme={theme}/>
            </Container>
        );
    }
}
export default EmojiGame;

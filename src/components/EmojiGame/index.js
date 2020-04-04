import React from 'react';
import NavBar from './NavBar.js'
import EmojiCards from './EmojiCards.js'
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
        /*
        this.state = {
            emoji: [
                { id: 0, isClicked: false, name: "Exploding Head", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png" },
                { id: 1, isClicked: false, name: "Grinning Face with Sweat", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png" },
                { id: 2, isClicked: false, name: "Smiling Face with Heart-Eyes", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png" },
                { id: 3, isClicked: false, name: "Smirking Face", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png" },
                { id: 4, isClicked: false, name: "Thinking Face", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png" },
                { id: 5, isClicked: false, name: "Winking Face", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png" },
                { id: 6, isClicked: false, name: "Grinning Face", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png" },
                { id: 7, isClicked: false, name: "Crying Face", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png" },
                { id: 8, isClicked: false, name: "Astonished Face", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png" },
                { id: 9, isClicked: false, name: "Face with Tears of Joy", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png" },
                { id: 10, isClicked: false, name: "Star-Struck", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png" },
                { id: 11, isClicked: false, name: "Winking Face with Tongue", img: "https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png" }
            ]
        }*/
        this.state = {
            emojis: []
        }
    }
    componentDidMount() {
        this.getEmojies()
    }
    getEmojies = () => {
        let emojisArray = []
        this.emojiNames.forEach(emojiName => {
            let emoji = {
                id: this.emojiNames.indexOf(emojiName),
                isClicked: false,
                name: emojiName,
                avtar: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${this.emojiNames.indexOf(emojiName)+1}.png`
            }
            emojisArray = [...emojisArray, emoji];
        })
        this.setState({ emojis: emojisArray });
    }
    render() {
        const emojis = this.state.emojis;
        return (
            <div>
            <NavBar/>
            <EmojiCards emojis={emojis}/>
            </div>
        );
    }
}
export default EmojiGame;

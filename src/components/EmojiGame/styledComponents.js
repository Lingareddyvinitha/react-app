import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `
    ${tw `m-1`}
    ${props =>({backgroundColor:props.theme,
                color:props.textColor})}`;

const Header = styled("div")
`${tw `flex flex-wrap justify-between items-center`}`;

const GameName = styled("h1")
`
${tw `m-2 font-bold text-4xl mr-auto`}`;

const TopScore = styled("div")
`${tw `m-2 font-bold text-xl`}`;

const Score = TopScore.withComponent('div');

const ThemeButton = styled("button")
`${tw ` border-solid border-black` }`;

const Cards = styled.div `${tw `flex items-center justify-center flex-wrap `}`;

const Card = styled.div `${tw `flex items-center justify-center flex-col w-64 h-64 m-4 shadow-custom`}`;

const EmojiImg = styled.img `${tw`w-40 border-none`}`

const EmojiName = styled.span `${tw `m-2`}`

const Footer = Container.withComponent('div');

const InstructionsTiltle = GameName.withComponent('h2');

const Instructions = styled.p `${tw `m-1 text-lg`}`

const Result = styled.div `${tw `flex items-center justify-center flex-col bg-blue-200`}
height:70vh`

const Message = styled.span `
${tw `font-bold text-lg`}
${props => (props.color === "You Lose!") ? tw`text-red-500`: tw`text-green-500`}
`;

const ShowScore = styled.span `${tw `font-bold text-lg`}`;

const PlayAgainButton = styled.button `${tw `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}`



export {
    Container,
    Header,
    GameName,
    TopScore,
    Score,
    ThemeButton,
    Cards,
    Card,
    EmojiImg,
    EmojiName,
    Footer,
    InstructionsTiltle,
    Instructions,
    Result,
    Message,
    ShowScore,
    PlayAgainButton
};

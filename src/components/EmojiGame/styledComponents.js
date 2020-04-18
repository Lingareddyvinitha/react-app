import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `
    ${tw ``}
    ${props =>({backgroundColor:props.theme,
                color:props.textColor})}`;

const Header = styled("div")
`${tw `px-5 py-3 w-full`}
${props =>({backgroundColor:props.theme,
                color:props.textColor})} `;

const Group = styled.div `${tw `flex flex-row items-center flex-grow` }`

const GameName = styled("h1")
`
${tw `w-1/2 sm:w-2/5 text-2xl sm:text-3xl`}`;

const Nav = styled.div `${tw `w-1/2 sm:w-3/5 flex justify-end items-center `}`

const ScoresGroup = styled.div `${tw `hidden sm:flex items-center`}`

const TopScore = styled("div")
`${tw `font-bold mx-3`}`;

const Score = TopScore.withComponent('div');

const ThemeButton = styled("button")
`${tw ` border border-solid p-2 ml-3 focus:outline-none cursor-default border-black` }`;

const NavSmallScreen = styled.div `${tw `sm:hidden flex flex-col text-center mt-3`}`

const Cards = styled.div `${tw `flex items-center justify-center flex-wrap`}
${props =>({backgroundColor:props.theme,
                color:props.textColor})}`;;

const Card = styled.div `${tw `flex items-center justify-center flex-col w-64 h-64 m-4 shadow-custom`}
${props =>({
    backgroundColor: props.theme,
    color: props.textColor
})}`;;

const EmojiImg = styled.img `${tw`w-40 border-none`}`

const EmojiName = styled.span `${tw `m-2`}`

const Footer = styled('div')
`${tw `bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded`}`;

const InstructionsTiltle = GameName.withComponent('h2');

const Instructions = styled.p `${tw `text-lg`}`

const Result = styled.div `${tw `flex items-center justify-center flex-col bg-blue-200`}
${props =>({backgroundColor:props.theme,
                color:props.textColor})}
                height:72vh
                `

const Message = styled.span `
${tw `font-bold py-3 text-3xl`}
${props => (props.color === "You Lose!") ? tw`text-red-500`: tw`text-green-500`}
`;

const ShowScore = styled.span `${tw `text-4xl font-bold text-blue-900`}`;

const PlayAgainButton = styled.button `${tw `bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded`}`



export {
    Container,
    Header,
    Group,
    GameName,
    ScoresGroup,
    Nav,
    TopScore,
    Score,
    ThemeButton,
    NavSmallScreen,
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

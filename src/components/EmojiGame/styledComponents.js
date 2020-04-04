import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Header = styled("div")
`${tw `bg-white text-black flex flex-wrap justify-between items-center`}`;

const GameName = styled("h1")
`
${tw `m-2 font-bold text-4xl mr-auto`}`;

const TopScore = styled("div")
`${tw `m-2 font-bold text-xl`}`;

const Score = TopScore.withComponent('div');

const ThemeButton = styled("button")
`${tw ` border-solid border-black` }`;

const Cards = styled.div `${tw `flex items-center justify-center flex-wrap`}`;

const Card = styled.div `${tw `flex items-center justify-center flex-col w-64 h-64 border border-solid border-black m-2`}`;

const EmojiImg = styled.img `${tw`w-40 border border-solid border-black`}`

const EmojiName = styled.span `${tw `m-2`}`

export { Header, GameName, TopScore, Score, ThemeButton, Cards, Card, EmojiImg, EmojiName };

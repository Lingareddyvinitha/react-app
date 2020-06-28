import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex flex-col items-center justify-center h-auto`}
${props =>({
    backgroundColor: props.gridGamePageBackgroundColor,
    color:props.textColor
})
}`;

const Message = styled.span `
${tw `font-bold py-3  text-green-500`}
${props=>({fontSize:`${props.size}px`})}
`;
const Level = styled.span `${tw `text-4xl font-bold text-blue-900`}`;

const PlayAgainButton = styled.button `
${tw `bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded focus:outline-none`}
`


export { Container, Message, Level, PlayAgainButton }

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const GameArea = styled.div `${tw `flex justify-center items-center flex-wrap`}

${props=>({width:props.width})}`

export { GameArea }

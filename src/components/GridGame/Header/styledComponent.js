import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex flex-col items-center justify-center `}
${props=>({width:props.width})}`

const TopLevel = styled("div")
`${tw `font-bold mx-3 my-3`}`;

const Group = styled.div `${tw `flex flex-row items-center justify-between w-full`}`

const Level = TopLevel.withComponent('div')

const ThemeButton = styled("button")
`${tw ` border border-solid p-2 ml-3 focus:outline-none cursor-default` }
${props=>{borderColor:props.selectedTheme.textColor}}`;

export {
    Container,
    TopLevel,
    Group,
    Level,
    ThemeButton
}

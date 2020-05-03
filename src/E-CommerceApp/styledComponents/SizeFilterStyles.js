import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex flex-col ` }`

const Group = styled.div `${tw `flex justify-start items-center flex-wrap`}`


const Label = styled.div `${tw `font-bold`}`

export {
    Container,
    Label,
    Group
}

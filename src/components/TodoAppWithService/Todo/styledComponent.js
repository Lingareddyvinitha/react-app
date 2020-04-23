import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw ` flex justify-center items-center w-4/5 m-2`}`

const CheckBox = styled.input `${tw`h-8 border border-solid
border-black object-cover p-10  w-8 rounded-full`}
`
const Delete = styled.span `${tw `text-3xl text-red-500`}`

const ToDo = styled.input `${tw `w-2/5 bg-white h-8`}`

export { Container, ToDo, CheckBox, Delete }

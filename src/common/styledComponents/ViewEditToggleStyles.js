import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex justify-center  flex-col 
items-center w-full bg-gray-300 h-32`}`
const Input = styled.input `${tw `w-1/4 `}`
const Button = styled.button `${tw `bg-blue-400 w-12 h-8 rounded-sm`}`
const Group = styled.div `${ tw `flex w-full justify-center` }`
const Heading = styled.h3 `${tw `text-2xl font-bold`}`
export { Button, Input, Container, Group, Heading }

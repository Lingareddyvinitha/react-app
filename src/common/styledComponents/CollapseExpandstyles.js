import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const Container = styled.div `${tw `flex justify-center  flex-col items-center w-full bg-gray-400 h-32`}`
const Button = styled.button `${tw `bg-blue-400 w-16 h-8 rounded-sm`}`
const List = styled.ul `${props=>(props.toggleStatus)?(tw `hidden`):(tw `flex flex-col items-center w-full`)}`
const Group = styled.div `${ tw `flex w-full justify-center` }`
const Heading = styled.h3 `${tw `text-2xl font-bold`}`
export { Button, List, Container, Heading, Group }

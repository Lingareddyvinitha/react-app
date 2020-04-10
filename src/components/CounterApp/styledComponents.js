import styled from '@emotion/styled';
import tw from 'tailwind.macro';
const Container = styled.div `${tw `h-screen flex flex-col items-center justify-center` }`

const Heading = styled.h1 `${tw `mb-6 text-5xl font-bold` }`

const Group = styled.div `${tw ``}`

const IncrementButton = styled.button `${tw `h-12 w-12 mx-4 font-bold text-3xl sm:h-16 sm:w-16 bg-blue-700 text-white focus:outline-none rounded` }`

const Input = styled("input")
`${tw `w-40 h-12 sm:h-16 text-3xl border-orange-400 border-2 text-center rounded` }`

const DecrementButton = IncrementButton.withComponent("button");

export { Container, Heading, IncrementButton, Input, DecrementButton, Group }

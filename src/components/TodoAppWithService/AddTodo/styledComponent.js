import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const InputOfTodo = styled.input `${tw `self-center border-b-4 focus:outline-none w-4/12 text-2xl ` }`

const InputContainer = styled.div `${tw `flex justify-center items-center flex-col`}`

export {
    InputOfTodo,
    InputContainer

}

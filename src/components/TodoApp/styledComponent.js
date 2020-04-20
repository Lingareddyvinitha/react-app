import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Loading = styled.div `${tw `flex justify-center items-center` }`

const LoaderImg = styled.img `${tw `h-screen`}`

const DataNotFound = styled.div `${tw ``}`

const NetworkError = styled.div `${tw `flex justify-center items-center flex-col h-screen`}`

const Message = styled.div `${tw ``}`

const RetryButton = styled.button `${tw `bg-blue-600 w-40 m-2 h-12`}`

const InputOfTodo = styled.input `${tw `self-center border-b-4 focus:outline-none w-64` }`

const Header = styled.div `${tw `flex justify-center items-center text-6xl` }
  color: rgba(175, 47, 47, 0.2)`

const InputContainer = styled.div `${tw `flex justify-center items-center flex-col`}`

const TodoContainer = InputContainer.withComponent("div")

const FooterContainer = styled('div')
`${tw `flex justify-center items-center`}`

export {
    Loading,
    LoaderImg,
    DataNotFound,
    NetworkError,
    Message,
    RetryButton,
    InputOfTodo,
    Header,
    InputContainer,
    TodoContainer,
    FooterContainer
}

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex justify-center items-center bg-gray-200 h-screen`}`

const SignInContainer = styled.form `${tw `flex justify-center items-center flex-col bg-white m-6 `}`

const UserName = styled.input`${tw`border-solid border border-current rounded-md h-12 w-56 m-2 outline-none`}`

const Password = UserName.withComponent('input')

const SignIn = styled.button `${tw `h-12 w-48 bg-gray-900 text-white rounded-md m-2 flex justify-center outline-none`}`

const Heading = styled.div `${tw `font-bold m-2 self-start`}`

const ErrorMessage = styled.span `${tw `text-red-600`}`

export {
    Container,
    SignInContainer,
    UserName,
    Password,
    SignIn,
    Heading,
    ErrorMessage
}

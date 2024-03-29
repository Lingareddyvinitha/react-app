import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex justify-between items-start flex-col ` }`

const Left = styled.div `${tw `flex flex-col justify-center w-4/5 flex-grow`}`

const SignOut = styled.button `${tw `border-current border-solid border rounded-md text-sm p-1`}`

const Top = styled.div `${tw `flex justify-between items-start  my-2 h-12 w-full m-6`}`

const Right = styled.div `${tw `w-1/4`}`

const Buttom = styled.div `${tw `flex justify-end  flex-grow mr-12`}`

const Group = styled.div `${tw `flex justify-center items-start  w-screen mx-8 `}`

export {
    Container,
    Group,
    SignOut,
    Top,
    Right,
    Left,
    Buttom
}

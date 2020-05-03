import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex justify-center items-center flex-col w-full   border-t border-white pt-2 pb-2` }`

const Group = styled.div `${tw `flex justify-start items-start w-full` }`

const Image = styled.img `${tw `w-16 h-20 mx-2`}`

const Info = styled.div `${tw `flex justify-start items-start flex-col`}`

const Amount = styled.div `${tw `text-yellow-500`}`

const Title = styled.div `${tw `text-white`}`

const Style = styled.div `${tw `text-gray-400`}`

const Quantity = styled.div `${tw `text-gray-400`}`

const Delete = styled.button `${tw `focus:outline-none font-bold text-black `}`

const Wrapper = styled.div `${tw `flex flex-col ml-auto`}`
export {
    Container,
    Group,
    Image,
    Info,
    Amount,
    Title,
    Style,
    Quantity,
    Delete,
    Wrapper
}

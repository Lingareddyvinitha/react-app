import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex justify-center items-center w-1/5 flex-col m-2 hover:border border-solid border-current` }`

const Image = styled.img `${tw ``}`

const Title = styled.span `${tw ``}`

const Price = styled.div `${tw ``}`

const InstallMentCalculation = styled.div `${tw``}`

const AddToCart = styled.div `${tw `w-48 h-10 bg-black rounded-md text-white flex justify-center items-center`}`

export {
    Container,
    Image,
    Title,
    Price,
    InstallMentCalculation,
    AddToCart
}

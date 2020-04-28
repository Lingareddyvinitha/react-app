import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex justify-around items-center text-white flex-col` }`

const noOfProductsInCart = styled.div `${tw `text-yellow-500`}`
export {
    Container,
    noOfProductsInCart
}

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `fixed top-0 right-0 z-10 bg-gray-800 text-white ` }
${props=>props.shouldDisplayCart?(tw `h-full w-4/12`):(tw `w-20 flex justify-center items-center`)}
transition: width 500ms;
`

const Display = styled.div `${tw ``}`

const Cart = styled.div `${tw ` w-20 h-20 text-5xl pt-1 mt-3  `}`

const Group = styled.div `${tw ``}`

const Wrapper = styled.div `${tw ` -mt-16`}`

const NoOfProductsInCart = styled.p `${tw `text-orange-400 -mt-16 pb-4 ml-6`}`

const Close = styled.button `${tw `-ml-6 bg-gray-800 p-4 focus:outline-none`}`

const InSideCart = styled.div `${tw `w-20 h-20 text-5xl`}`

const Header = styled.div `${tw `flex justify-center items-center `}`

export { Container, Display, Cart, Group, NoOfProductsInCart, Close, InSideCart, Header, Wrapper }

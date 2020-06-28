import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Checkout = styled.button `${tw `h-12 w-64 bg-gray-900 text-white rounded-md m-2`}
${props=>(props.disabled)?(tw `bg-gray-600 cursor-not-allowed`):(tw `cursor-pointer`)}`

const Container = styled.div `${tw `flex justify-center items-center`}`


export {
    Checkout,
    Container
}

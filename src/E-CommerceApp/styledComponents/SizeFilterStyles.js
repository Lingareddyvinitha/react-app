import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex justify-start items-center flex-wrap` }`

const XS = styled.button `${tw `h-10 w-10 border-none rounded-full m-2`}
${props=>(props.clicked==='clicked')?(tw `bg-gray-900`):(tw `bg-gray-400`)}`

const S = styled.button `${tw `h-10 w-10 border-none rounded-full m-2`}
${props=>(props.clicked)?(tw `bg-gray-900`):(tw `bg-gray-400`)}`

const M = styled.button `${tw `h-10 w-10 border-none rounded-full m-2`}
${props=>(props.clicked)?(tw `bg-gray-900`):(tw `bg-gray-400`)}`

const L = styled.button `${tw `h-10 w-10 border-none rounded-full m-2 `}
${props=>(props.clicked)?(tw `bg-gray-900`):(tw `bg-gray-400`)}`

const XL = styled.button `${tw `h-10 w-10 border-none rounded-full m-2`}
${props=>(props.clicked)?(tw `bg-gray-900`):(tw `bg-gray-400`)}`

const XXL = styled.button `${tw `h-10 w-10 border-none rounded-full m-2`}
${props=>(props.clicked)?(tw `bg-gray-900`):(tw `bg-gray-400`)}`

export {
    Container,
    XS,
    S,
    M,
    L,
    XL,
    XXL
}

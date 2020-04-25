import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex justify-center items-center` }`

const Sorting = styled.select `${tw `border border-solid border-black rounded-md w-48 h-6 bg-white`}`

const Label = styled.label `${tw ``}`


export {
    Container,
    Sorting,
    Label
}

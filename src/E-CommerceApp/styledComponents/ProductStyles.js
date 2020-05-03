import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex justify-center items-center w-1/5 flex-col m-2 border border-white hover:border hover:border-gray-400` }`

const Image = styled.img `${tw `w-48 h-64`}`

const Title = styled.span `${tw ``}`

const Price = styled.div `${tw ``}`

const InstallMentCalculation = styled.div `${tw`text-gray-500`}`

const Group = styled.div `${tw `relative mt-2 p-3`}`

const FreeShipping = styled.div `${tw `bg-black text-white text-sm`}
position: absolute;
  top: 8px;
  right: 2px;
  fontSize: 18px;`

const AddToCart = styled.div `${tw `w-48 h-10 bg-black rounded-md text-white m-1 flex justify-center items-center`}`

const DecimalPart = styled.span `${tw `text-xs`}`

const NumberPart = styled.span `${tw ``}`

export {
  Container,
  Image,
  Title,
  Price,
  InstallMentCalculation,
  AddToCart,
  Group,
  FreeShipping,
  DecimalPart,
  NumberPart
}

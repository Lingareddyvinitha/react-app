import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex  justify-center`}`;

const ForwardButton = styled.button `${tw `cursor-auto`}
${props=>({backgroundColor: "#000",width:"30px",color:"white",height:"30px"})}
${props=>((props.disabled)?(tw `cursor-not-allowed bg-gray-600`):(tw `cursor-pointer`))}`

const Page = styled.input `${tw ``}
${props=>({width:"50px"})}`

const TotalPages = styled.div `${tw ``}`

const BackwardButton = styled.button `${tw ``}
${props=>({backgroundColor: "#000",width:"30px",color:"white",height:"30px"})}
${props=>((props.disabled)?(tw `cursor-not-allowed bg-gray-600`):(tw `cursor-pointer`))}`



export { Container, ForwardButton, Page, TotalPages, BackwardButton }

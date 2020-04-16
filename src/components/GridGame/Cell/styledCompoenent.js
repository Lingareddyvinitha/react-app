import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Grid = styled.div `${tw `bg-gray-600 w-20	 h-20 m-1`}
${props=>(props.colored)? tw `bg-green-900` : tw `bg-gray-600`}
${props=>(props.clicked)&& tw `bg-green-900` }
${props=>({width:props.width,
height:props.width})}`


export { Grid }

import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const SizeButton = styled.button `${tw `h-10 w-10 border-none rounded-full m-2 focus:outline-none`}
${props=>(props.isClicked)?(tw `bg-gray-900 text-white`):(tw `bg-gray-400`)}`

export { SizeButton }

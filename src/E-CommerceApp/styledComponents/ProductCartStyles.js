import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `fixed top-0 right-0 z-10 bg-gray-800 text-white` }
${props=>props.shouldDisplayCart?(tw `h-full w-4/12`):(tw `w-20`)}`

const Display = styled.div `${tw ``}`

export { Container, Display }

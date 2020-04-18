import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Container = styled.div `${tw `flex flex-col items-center justify-center h-screen`}
${props =>({
    backgroundColor: props.selectedTheme.gridGamePageBackgroundColor,
    color:props.selectedTheme.textColor
})
}`;
const Group = styled.div `${tw `flex items-center justify-center`}`


export { Container, Group }

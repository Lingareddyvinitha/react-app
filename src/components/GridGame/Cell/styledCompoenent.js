import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Grid = styled.button `${tw `w-20 h-20 m-1   focus:outline-none`}
transition: background-color 0.5s;
${props=>({width:props.width,height:props.width})}
${props=>(props.colored)? ({backgroundColor: props.selectedTheme.hiddenCellColor}) :
(props.clicked)?
(props.isHidden)?({backgroundColor:props.selectedTheme.hiddenCellColor}):({backgroundColor:props.selectedTheme.wrongCell}):
({backgroundColor: props.selectedTheme.cellBackgroundColor})}`


export { Grid }

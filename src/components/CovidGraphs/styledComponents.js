import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const Color = styled.div(
    tw `border-white`
)

const DarkOrLightMode = styled("div")
`
    ${props => (props.mode === "dark") ? tw `bg-grey-700 text-white` : tw `bg-white text-black`}
    h3 {
    margin:5px;
        }
        ${Color}
        `

const HeaderFile = styled.div `
${tw `m-1 flex justify-between shadow-lg shadow-sm shadow-md`}`
const DarkOrLightModeButton = DarkOrLightMode.withComponent('button')
export { DarkOrLightMode, HeaderFile, DarkOrLightModeButton };

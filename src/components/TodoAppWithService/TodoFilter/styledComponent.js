import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const FooterContainer = styled('div')
`${tw `flex justify-center items-center mb-5 w-2/5 `}
background: white;
    box-shadow:
        0 1px 1px rgba(0,0,0,0.15), 
        0 10px 0 -5px #eee, 
        0 10px 1px -4px rgba(0,0,0,0.15), 
        0 20px 0 -10px #eee, 
        0 20px 1px -9px rgba(0,0,0,0.15); `

const ALL = styled.button `${tw `m-1 text-current hover:border-dotted border-gray-900`}`

const ACTIVE = ALL.withComponent('button')

const COMPLETED = ALL.withComponent('button')

const CLEARCOMPLETED = ALL.withComponent('button')

export {
    FooterContainer,
    ALL,
    ACTIVE,
    COMPLETED,
    CLEARCOMPLETED
}

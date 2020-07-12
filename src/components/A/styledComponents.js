import styled from '@emotion/styled'
import tw from 'tailwind.macro'

export const Card = styled.div`
   ${tw`md:flex`}
   box-shadow: 3px 3px 5px 6px #ccc;
   width: 100%;
   height: 50%;
`

export const Icon = styled.img`
   ${tw`w-16 h-16 rounded-full border border-gray-100 mx-auto md:mx-10`}
`

export const Details = styled.div`
   ${tw`text-center`}
`

export const Name = styled.div`
   ${tw`text-xl font-semibold text-gray-600`}
`

export const Email = styled.div`
   ${tw`text-gray-500`}
`

export const PhoneNumber = styled.div`
   ${tw`text-gray-500`}
`

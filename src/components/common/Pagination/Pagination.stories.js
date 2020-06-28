import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import { Pagination } from './'

export default {
    component: Pagination,
    title: 'Common/Pagination',
}

export const defaultView = () => <Pagination />

// export const knobs = () => (
//     <NoDataView 
//     color={color('color', 'black')}/>
// )

// knobs.story = {
//     decorators: [withKnobs]
// }

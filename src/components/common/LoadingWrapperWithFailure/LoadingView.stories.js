import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import LoadingView from './LoadingView'

export default {
    component: LoadingView,
    title: 'Common/LoadingView'
}

export const defaultView = () => <LoadingView />

export const knobs = () => (
    <LoadingView 
    fill={color('fill', '#00BFFF')}/>
)

knobs.story = {
    decorators: [withKnobs]
}

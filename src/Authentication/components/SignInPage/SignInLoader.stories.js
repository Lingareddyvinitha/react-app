import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color, number } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import { SignInLoader } from './SignInPage'

export default {
    component: SignInLoader,
    title: 'src/components/SignInLoader',
}

export const defaultView = () => <SignInLoader />

export const knobs = () => (
    <SignInLoader 
            color={color('color', 'black')}
            width={number('width',30)}
            height={number('height',30)}
            />
)

knobs.story = {
    decorators: [withKnobs]
}

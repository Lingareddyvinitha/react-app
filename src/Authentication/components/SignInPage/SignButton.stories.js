import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import { SignButton } from './SignInPage.js'

export default {
    component: SignButton,
    title: 'src/components/SignButton',
}


export const defaultView = () => <SignButton />

export const loadingView = () => <SignButton getUserSignInAPIStatus ={100} />

export const knobs = () => (
    <SignButton
      buttonName = { text('buttonName', 'Sign in') }
   />
)

knobs.story = {
    decorators: [withKnobs]
}

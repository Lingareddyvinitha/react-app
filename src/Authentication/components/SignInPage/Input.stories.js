import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import { Input } from './SignInPage.js'

export default {
    component: Input,
    title: 'src/components/input',
}


export const defaultView = () => <Input />

// export const loadingView = () => <SignButton getUserSignInAPIStatus ={100} />

export const knobs = () => (
    <Input
      placeholder = { text('placeholder', 'InputTag') }
      type={text('type',"text")}
  />
)

knobs.story = {
    decorators: [withKnobs]
}

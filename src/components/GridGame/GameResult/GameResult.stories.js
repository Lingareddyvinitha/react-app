import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color, number } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import GameResult from './'

export default {
    component: GameResult,
    title: 'src/components/GameResult',
}

export const defaultView = () => <GameResult
gridGamePageBackgroundColor = "#1a202c"
textColor = "white"/>

export const lightModeView = () => <GameResult
    gridGamePageBackgroundColor = "#f7fafc"
textColor = "black"
    />

export const knobs = () => (<GameResult
    gridGamePageBackgroundColor = { color('color', 'black') }
    textColor = { color('color', 'white') }
    size={number('width',30)}
    />)

knobs.story = {
    decorators: [withKnobs]
}

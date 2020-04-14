import React from 'react';
import { observer } from 'mobx-react'

import CounterAppStore from '../../stores/CounterAppStore'
import { Container, Heading, IncrementButton, Input, DecrementButton, Group } from './styledComponents'
const counterAppStore = new CounterAppStore()

@observer
class CounterApp extends React.Component {
    getCurrentValue = () => {
        return counterAppStore.count;
    }
    onIncrement = () => {
        counterAppStore.onIncrement()
    }
    onDecrement = () => {
        counterAppStore.onDecrement()
    }
    onChangeCount = (event) => {
        counterAppStore.onChangeCount(event.target.value)
    }
    render() {
        const value = this.getCurrentValue()
        return (
            <Container>
            <Heading>Counter</Heading>
            <Group>
            <IncrementButton onClick={this.onIncrement}>+</IncrementButton>
            <Input type="number" value={value} onChange={this.onChangeCount}></Input>
            <DecrementButton onClick={this.onDecrement}>-</DecrementButton>
            </Group>
            </Container>
        )
    }
}
export default CounterApp;

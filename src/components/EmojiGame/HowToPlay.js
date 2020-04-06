import React from 'react';
import { Footer, InstructionsTiltle, Instructions } from './styledComponents.js'
class HowToPlay extends React.Component {

    render() {
        return (
            <Footer>
        <InstructionsTiltle>How to Play</InstructionsTiltle>
        <Instructions>Get points by clicking on an image but don't click on any image more than once!</Instructions>
        </Footer>
        );
    }
}
export default HowToPlay;

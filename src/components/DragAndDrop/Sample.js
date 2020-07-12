import React, { Component } from 'react'
import Card from './index'

class Sample extends Component {
   render() {
      return (
         <div>
            <Card isDragging={true} text='chitra' />
         </div>
      )
   }
}

export default Sample

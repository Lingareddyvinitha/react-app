import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Container } from '../../styledComponents/ToastifyStyles'

class Toastify extends React.Component {
    render() {
        return (
            <Container>
            <ToastContainer autoClose={3000}/>
            </Container>
        )
    }
}
export default Toastify

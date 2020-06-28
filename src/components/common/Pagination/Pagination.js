import React from 'react'
import { ForwardButton, Page, TotalPages, BackwardButton, Container } from './StyledComponents'
import { GrFormPrevious } from 'react-icons/gr'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
@observer
class Pagination extends React.Component {
    //@observable todos = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
    @observable currentPage = 1
    @observable totalPages = 4
    @observable isBackwardButtonDisabled = true
    @observable isForwardButtonDisabled = false
    @action.bound
    handleClick(event) {
        this.currentPage = Number(event.target.id)
    }

    @action.bound
    onFarwardButtonClick() {
        const { onFarwardButtonClick, currentPage, getProductList, clearProductList, totalPages } = this.props
        if (currentPage < totalPages) {
            onFarwardButtonClick()
            getProductList()
            clearProductList()
            this.isBackwardButtonDisabled = false
        }
        if (currentPage === totalPages - 1) {
            this.isForwardButtonDisabled = true
        }
    }

    @action.bound
    onBackwardClick() {
        const { onBackwardClick, currentPage, totalPages, getProductList, clearProductList } = this.props
        if (currentPage > 1) {
            onBackwardClick()
            getProductList()
            clearProductList()
            this.isForwardButtonDisabled = false
        }
        if (currentPage === 2) {
            this.isBackwardButtonDisabled = true
        }
    }

    render() {
        const { currentPage, totalPages } = this.props
        return (
            <Container>
            <BackwardButton onClick={this.onBackwardClick} disabled={this.isBackwardButtonDisabled}>&lt;</BackwardButton>
            <Page value={currentPage} />
            <TotalPages>/{totalPages}</TotalPages>
            <ForwardButton onClick={this.onFarwardButtonClick}
            disabled={this.isForwardButtonDisabled}>&gt;</ForwardButton>
          </Container>
        );
    }
}

export default Pagination
/*
<ul>
              {renderTodos}
            </ul>
<ul id="page-numbers">
              {renderPageNumbers}
            </ul>*/

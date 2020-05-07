import getProductListResponse from '../fixtures/getProductListResponse.json'

export const Ascending = () => {
    return getProductListResponse.sort((a, b) => (a.price - b.price))
}

export const Descending = () => {
    return getProductListResponse.sort((a, b) => (b.price - a.price))
}

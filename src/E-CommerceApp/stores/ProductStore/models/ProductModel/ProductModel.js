class ProductModel {
    constructor(product) {
        this.productId = product.productId,
            this.availableSizes = product.availableSizes,
            this.currencyFormat = product.currencyFormat,
            this.currencyId = product.currencyId,
            this.description = product.description,
            this.installmentsCount = product.installmentsCount,
            this.isFreeShipping = product.isFreeShipping,
            this.price = product.price,
            this.printStyle = product.printStyle,
            this.title = product.title,
            this.imageURL = product.imageURL
    }

}


export default ProductModel;

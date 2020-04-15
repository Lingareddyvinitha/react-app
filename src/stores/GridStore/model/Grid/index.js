import { observable } from 'mobx'

class Grid {
    id
    @observable isHidden
    constructor(gridObject) {
        this.id = gridObject.id
        this.isHidden = gridObject.isHidden
    }
}

export default Grid

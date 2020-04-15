import { observable, action, computed } from 'mobx'

import levelData from './level.json'
import Grid from './model/Grid'
let shuffle = require('shuffle-array')


class GridStore {
    @observable currentLevelGridCells
    @observable level
    @observable isGameCompleted
    constructor() {
        this.currentLevelGridCells = []
        this.level = 0
        this.isGameCompleted = false
        this.topLevel = 0
        this.selectedCellsCount = 0
    }

    @action.bound
    onCellClick(id) {

        const getClickedInfo = this.currentLevelGridCells.find(cell => cell.id === id)
        console.log(getClickedInfo)


    }

    @action
    setGridCells() {

        let array = []
        for (let i = 0; i < levelData[this.level].gridSize ** 2; i++) {
            array.push(Math.random().toString())
        }
        const array1 = [...array]
        array = shuffle(array);
        let selectedAsHidden = array.slice(0, levelData[this.level].hiddenCellCount);
        array1.forEach(id => {
            const gridObject = {
                id,
                isHidden: false
            }
            if (selectedAsHidden.includes(id)) {
                gridObject.isHidden = true
            }
            else {
                gridObject.isHidden = false
            }

            const gridModel = new Grid(gridObject)
            this.currentLevelGridCells.push(gridModel)
        })
    }


    @action
    goToNextLevelAndUpdateCells() {

    }

    @action
    goToInitialLevelAndUpdateCells() {

    }

    @action
    resetSelectedCellsCount() {

    }

    @action
    incrementSelectedCellsCount() {

    }

    @action
    onPlayAgainClick() {

    }

    @action
    resetGame() {

    }

    @action
    setTopLevel() {

    }

}

const gridStore = new GridStore()

export default gridStore

import { observable, action, computed } from 'mobx'

import levelData from './level.json'
import Grid from './model/Grid'
let shuffle = require('shuffle-array')


class GridStore {
    @observable currentLevelGridCells
    @observable level
    @observable topLevel
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
        if (getClickedInfo.isHidden === true) {
            this.incrementSelectedCellsCount();
            if (this.selectedCellsCount === levelData[this.level].hiddenCellCount) {
                this.goToNextLevelAndUpdateCells()
            }

        }
        else {
            this.setTopLevel()
            this.resetGame();
        }


    }

    @action.bound
    setGridCells() {
        this.currentLevelGridCells = []
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


    @action.bound
    goToNextLevelAndUpdateCells() {
        this.level++;
        this.resetSelectedCellsCount()
        this.setGridCells()
    }

    @action.bound
    goToInitialLevelAndUpdateCells() {
        this.setGridCells()
    }

    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellsCount = 0
    }

    @action.bound
    incrementSelectedCellsCount() {
        this.selectedCellsCount++
    }

    @action.bound
    onPlayAgainClick() {
        this.setTopLevel();
        this.resetGame()
    }

    @action.bound
    resetGame() {
        this.currentLevelGridCells = []
        this.level = 0
        this.isGameCompleted = false
        this.selectedCellsCount = 0
        this.goToInitialLevelAndUpdateCells()

    }

    @action.bound
    setTopLevel() {
        if (this.level > this.topLevel) {
            this.topLevel = this.level
        }


    }

}

const gridStore = new GridStore()

export default gridStore

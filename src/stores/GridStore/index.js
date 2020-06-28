import { observable, action } from 'mobx'

import levelData from './level.json'
import Grid from './model/Grid'
let shuffle = require('shuffle-array')

const delay = 500
let count = 0

class GridStore {
    @observable currentLevelGridCells
    @observable level
    @observable topLevel
    @observable isGameCompleted
    @observable playerInfo
    constructor() {
        this.currentLevelGridCells = []
        this.level = 0
        this.isGameCompleted = false
        this.topLevel = 0
        this.selectedCellsCount = 0
        this.clickedIds = []
        this.playerInfo = []

    }

    @action.bound
    onCellClick(isHidden, id) {
        if (isHidden === true) {
            this.incrementSelectedCellsCount();
            if (this.selectedCellsCount === levelData[this.level].hiddenCellCount) {
                if (this.level === levelData.length - 1) {

                    this.isGameCompleted = true;
                }
                else {
                    this.goToNextLevelAndUpdateCells()
                }
            }
        }
        else {
            this.getplayerGraphInfo()
            clearTimeout(this.levelTimer)
            this.resetGame();

        }
    }



    @action.bound
    setGridCells() {

        this.setTimer()
        this.currentLevelGridCells = []
        this.clickedIds = []
        let arrayOfIds = []

        for (let i = 0; i < levelData[this.level].gridSize ** 2; i++) {
            arrayOfIds.push(Math.random().toString())
        }

        const originalIds = [...arrayOfIds]
        arrayOfIds = shuffle(arrayOfIds);
        let selectedAsHidden = arrayOfIds.slice(0, levelData[this.level].hiddenCellCount);

        originalIds.forEach(id => {
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
    setTimer() {
        clearTimeout(this.timer)
        const playerTime = ((levelData[this.level].gridSize * 2) + levelData[this.level].gridSize) * 1000
        this.timer = setTimeout(() => {
            if (!this.isGameCompleted) {
                this.resetGame()
            }
        }, playerTime)
    }

    @action.bound
    goToNextLevelAndUpdateCells() {
        this.levelTimer = setTimeout(() => {
            this.level++;
            this.resetSelectedCellsCount()
            this.setGridCells()
        }, delay)

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
        this.getplayerGraphInfo()
        this.resetGame()
    }

    @action.bound
    resetGame() {
        setTimeout(() => {
            this.setTopLevel();
            this.currentLevelGridCells = []
            this.level = 0
            this.isGameCompleted = false
            this.selectedCellsCount = 0
            this.goToInitialLevelAndUpdateCells()
        }, delay)


    }

    @action.bound
    setTopLevel() {
        if (this.level > this.topLevel) {
            this.topLevel = this.level
        }


    }
    @action.bound
    getplayerGraphInfo() {
        const playerObject = {
            NoOfAttempt: `Attempt-${count}`,
            level: this.level
        }
        count++
        this.playerInfo.push(playerObject)
    }

}

const gridStore = new GridStore()

export default gridStore

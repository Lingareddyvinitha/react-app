import { observable, action } from 'mobx';

class CounterAppStore {
   @observable count
   constructor() {
      this.count = 0
   }
   @action.bound
   onIncrement() {
      this.count = Number(this.count)
      this.count = this.count + 1;
   }
   @action.bound
   onDecrement() {
      this.count = Number(this.count)
      this.count = this.count - 1;
   }
   @action.bound
   onChangeCount(value) {
      this.count = value;
   }
}
export default CounterAppStore;

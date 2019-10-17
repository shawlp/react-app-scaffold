import TestStore from './test-store';

class RootStore {
  constructor() {
    this.TestStore = new TestStore();
  }
}
const rootStore = new RootStore();
export default rootStore;
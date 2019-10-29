import {observable, action} from 'mobx';
import {api} from '@/api';

export default class TestStore {
  @observable dataList = [];

  @action getList = () => {
    // let params = {};
    // api.getDataList(params).then(res => {
    //   console.log('response', res);
    // })
    this.dataList = [
      {
        name: 'shaw',
        age: 25
      },
      {
        name: 'jane',
        age: 24
      }
    ];
  }

  @action getData = () => {
    api.getData().then(res => {
      console.log('getData', res);
    })
  }
}
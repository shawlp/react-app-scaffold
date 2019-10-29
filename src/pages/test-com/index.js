import React, { PureComponent, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import './index.less';
import {listenScroll} from '@/utils';
import { Button } from 'antd-mobile';

// const utils = require('@utils');
// console.log('utils', listenScroll);

@inject('TestStore')
@observer
class TestCom extends PureComponent {
  constructor(props) {
    super(props);
    this.getList = this.getList.bind(this);
  }
  getList() {
    const {getList} = this.props.TestStore;
    getList();
  }
  goToPage(pathname) {
    this.props.history.push({pathname});
  }
  getData() {
    const {getData} = this.props.TestStore;
    getData();
  }
  render() {
    const {dataList} = this.props.TestStore;
    return (<Fragment>
      <div className="test">
        <div onClick={this.getList}>hello test111223!!!</div>
        {
          dataList.map((item, index) => {
            return <div key={index} onClick={() => {this.getData()}}>{`${item.name}:${item.age}`}</div>
          })
        }
        <Button type="primary"  size="small" style={{width: '150px', margin: '10px auto'}} onClick={this.goToPage.bind(this, '/about')}>about page</Button>
        <Button type="primary"  size="small" style={{width: '150px', margin: '10px auto'}} onClick={this.goToPage.bind(this, '/list')}>List page</Button>
      </div>
    </Fragment>)
  }
}

export default TestCom;  

import React, { PureComponent, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import './index.less';

@inject('TestStore')
@observer
class TestCom extends PureComponent {
  constructor(props) {
    super(props);
    this.getList = this.getList.bind(this);
  }
  getList() {
    const {dataList, getList} = this.props.TestStore;
    getList();
  }
  render() {
    const {dataList, getList} = this.props.TestStore;
    return (<Fragment>
      <div className="test" onClick={this.getList}>hello test111223!!!</div>
      {
        dataList.map((item, index) => {
          return <div key={index}>{`${item.name}:${item.age}`}</div>
        })
      }
    </Fragment>)
  }
}

export default TestCom;

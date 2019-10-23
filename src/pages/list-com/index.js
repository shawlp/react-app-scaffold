import React, { PureComponent, Fragment } from 'react';
import './index.less';
import { Button } from 'antd-mobile';

class List extends PureComponent {
  constructor(props) {
    super(props);
  }
  onBack = () => {
    this.props.history.goBack();
  }
  render() {
    return (<Fragment>
      <div className="list">
        <div>This is list page</div>
        <Button type="primary" size="small" style={{width: '150px', margin: '10px auto'}} onClick={this.onBack}>return</Button>
      </div>
    </Fragment>)
  }
}

export default List;
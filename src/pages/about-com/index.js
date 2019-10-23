import React, { PureComponent, Fragment } from 'react';
import './index.less';
import { Button } from 'antd-mobile';

class About extends PureComponent {
  constructor(props) {
    super(props);
  }
  onBack = () => {
    this.props.history.goBack();
  }
  render() {
    return (<Fragment>
      <div className="about">
        <div>This is about page145678</div>
        <Button type="primary" size="small" style={{width: '150px', margin: '10px auto'}} onClick={this.onBack}>return</Button>
      </div>
    </Fragment>)
  }
}

export default About;   

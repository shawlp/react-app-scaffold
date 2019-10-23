import React, {PureComponent} from 'react';
import './index.less';

class StickyCom extends PureComponent {
  constructor(props){
    super(props);
    this.fixRef = React.createRef();
  }
  render() {
    return (
      <div className="sticky-wrapper">
        <section>
          <div className="color-box"></div>
          <div className="stick-box sticky">
            <div className="stick-item">
              2019年6月
            </div>
          </div>
          <div className="color-box-two"></div>
        </section>
        <section>
          <div className="stick-box sticky">
            <div className="stick-item">
              2019年7月
            </div>
          </div>
          <div className="color-box-two"></div>
        </section>
        <div>hello</div>    
      </div>
    )
  }
}

export default StickyCom;
import React, { PureComponent } from 'react';
import './index.less';
import Carousel from '@/components/Carousel';
import Goods from '@/components/goods';

export default class MallPage extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        imgs: ['https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png', 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png', 'https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png']
      };
    }
    componentDidMount() {

    }
    goToPage = (pathname) => {
      this.props.history.push({pathname});
    }
    render() {
      return (
        <div className="mall-wrapper">
          <Carousel imgs={this.state.imgs}/>
          <div className="my-score">
            <div className="score">
              <span>我的积分</span>
              <span>1000</span>
            </div>
            <div className="record" onTouchStart={this.goToPage.bind(this, '/exchange')}>
              兑换记录
            </div>
          </div>
          <Goods goToPage={this.goToPage}/>
        </div>
      )
    }
}


import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export default class GoodsDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="goods-detail-wrapper">
        <div className="goods-img">
          <img src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png" />
        </div>
        <div className="goods">
          <div className="goods-name">商品名称</div>
          <div className="goods-score">1000000积分</div>
        </div>
        <div className="goods-blank"></div>
        <div className="detail-content">
          <div className="detail-title">详情介绍</div>
          <div dangerouslySetInnerHTML={{ __html: '<div>123</div>' }} className="detail-html"></div>
        </div>
        <Link to={{pathname: '/submit'}} className="operate-btn">兑换</Link>          
      </div>
    )
  }
}
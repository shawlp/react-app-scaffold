import React, { PureComponent } from 'react';
import { Toast } from 'antd-mobile';
import './index.less';

export default class ExchangePoint extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  copy = () => {
    Toast.success('复制成功!', 1);
  }
  render() {
    return (
      <div className="exchange-wrapper">
        <ul className="point-items">
          <li className="point-item">
            <div className="order">
              <span>订单号：2222222222222222288</span>
              <span>代发货</span>
            </div>
            <div className="line" style={{borderBottom: '1px solid #C7C0D7'}}></div>
            <div className="product">
              <span>商品名称</span>
              <span>1000000积分</span>
            </div>
            <div className="receiver">
              <span>收货人：小马驹</span>
              <span>2019-7-2</span>   
            </div>
          </li>
          <li className="point-item pb10">
            <div className="order">
              <span>订单号：2222222222222222288</span>
              <span>代发货</span>
            </div>
            <div className="line" style={{borderBottom: '1px solid #C7C0D7'}}></div>
            <div className="product">
              <span>商品名称</span>
              <span>1000000积分</span>
            </div>
            <div className="receiver">
              <span>收货人：小马驹</span>
              <span>2019-7-2</span>
            </div>
            <div className="post">
              <span>申通快递：28103829090234</span>
              <span onTouchStart={this.copy}>复制</span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
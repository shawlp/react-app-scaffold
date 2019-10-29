import React, { PureComponent } from 'react';
import './index.less';

export default class OrderResult extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 
    return (<div className="order-result-wrapper">
      <div className="result-status">
        <img src={require('@/assets/img/success.png')} />
        <p>兑换成功</p>
        <p>客服人员将在近期发放，请在兑换记录里面查收。</p>
      </div>
      <div className="order-info">
        <div className="info-title">兑换信息</div>
        <div className="input-wrapper">
          <div className="input-content clearfix">
            <div>
              <span></span>
              <span>生成时间：</span>
            </div>
            <div className="input-text">2017-7-2</div>
          </div>
        </div>
        <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
        <div className="input-wrapper">
          <div className="input-content clearfix">
            <div>
              <span></span>
              <span>订单号：</span>
            </div>
            <div className="input-text">2017-7-2</div>
          </div>
        </div>
        <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
        <div className="order-wrapper clearfix">
          <div className="order-img">
            <img src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png" />
          </div>
          <div className="order-intro">
            <div>商品名称</div>
            <div>1000000积分</div>
          </div>
        </div>  
        <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
        <div className="input-wrapper">
          <div className="input-content clearfix">
            <div>
              <span></span>
              <span>收货人：</span>
            </div>
            <div className="input-text">2017-7-2</div>
          </div>
        </div>
        <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
          <div className="input-wrapper">
            <div className="input-content clearfix">
                <div>
                  <span></span>
                  <span>所在地区：</span>
                </div>
                <div className="input-text">2017-7-2</div>
            </div>
          </div>
          <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
          <div className="input-wrapper">
            <div className="input-content clearfix">
                <div>
                  <span></span>
                  <span>详细地址：</span>
                </div>
                <div className="input-text">2017-7-2</div>
            </div>
          </div>  
          <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
        <div className="input-wrapper">
          <div className="input-content clearfix">
            <div>
              <span></span>
              <span>手机号：</span>
            </div>
            <div className="input-text">2017-7-2</div>
          </div>
        </div>

      </div>
    </div>)
  }
}
import React, { PureComponent } from 'react';
import { Picker, Modal } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import './index.less';

console.log('district', district);

const alert = Modal.alert;

export default class SubmitOrder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: '',
      visible: false
    }
  }
  goToPage = (pathname) => {
    this.props.history.push({pathname});
  }
  onOk = (v, e) => {
    console.log('v', v, e)
    this.setState({ pickerValue: v, visible: false })
  }
  submit = () => {
    let _this = this;
    alert('提示', '确认兑换此商品？', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: () => _this.goToPage('/result') }
    ]);
  }
  render() {
    const {pickerValue, visible} = this.state;
    return (
      <div className="submit-order-wrapper">
        <div className="order-content">
          <div className="order-title">兑换商品</div>
          <div className="clearfix">
            <div className="order-img">
              <img src="https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png" />
            </div>
            <div className="order-intro">
              <div>商品名称</div>
              <div>1000000积分</div>
            </div>
          </div>  
          <div className="order-title mr">收货信息</div>
          <div className="input-wrapper">
            <label>
              <div className="input-content clearfix">
                <div>
                  <span className="mrg5">*</span>
                  <span>收货人</span>
                </div>
                <input type="value" placeholder="请输入收货人姓名" />
              </div>
            </label>
          </div>
          <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
          <div className="input-wrapper"  onTouchStart={() => this.setState({ visible: true })}>
            <div className="input-content clearfix">
              <label>
                <div>
                  <span className="mrg5">*</span>
                  <span>所在地区</span>
                </div>
                <Picker
                  title="选择地区"
                  extra="请选择(可选)"
                  visible={visible}
                  data={district}
                  value={pickerValue}
                  onChange={v => this.setState({ pickerValue: v })}
                  onOk={this.onOk}
                  onDismiss={() => this.setState({ visible: false })}    
                >
                  <div className="input-text">{pickerValue ? pickerValue : '请选择所在地区'}</div>
                </Picker>
              </label>
            </div>
          </div>
          <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
          <div className="input-wrapper">
            <label>
              <div className="input-content clearfix">
                  <div>
                    <span className="mrg5">*</span>
                    <span>详细地址</span>
                  </div>
                  <input type="value" placeholder="请输入详细地址" />
              </div>
            </label>
          </div>
          <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
          <div className="input-wrapper">
            <label>
              <div className="input-content clearfix">
                <div>
                  <span className="mrg5">*</span>
                  <span>手机号</span>
                </div>
                <input type="value" placeholder="请输入手机号码" maxLength={11}/>
              </div>
            </label>
          </div>  
          <div className="input-line" style={{borderBottom: '1px solid #E4E1EE'}}></div>
        </div>

        <div className="operate-btn" onTouchStart={this.submit}>确定</div> 
      </div>
    )
  }  
}
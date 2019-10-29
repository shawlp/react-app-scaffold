import React, { PureComponent } from 'react';
import { holdify } from 'react-hold';
import './index.less';
require('intersection-observer');

// @holdify((props) => !props.data)
class Goods extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 在可视区域内懒加载图片
  lazyLoadImg() {
    const imgList = document.getElementsByClassName('img');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && entry.intersectionRatio <= 1) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      })
    });
    Array.from(imgList).forEach(img => {
      observer.observe(img);
    });
  }
  componentDidMount() {
    this.lazyLoadImg();
  }
  goToPage = () => {
    this.props.goToPage('/detail')
  }
  render() {
    return (
      <div className="goods-wrapper">
        <ul className="goods-items">
          <li onTouchStart={this.goToPage}>
            <div className="img-wrapper">
              <img data-src={require('@/assets/img/iphone.png')} className="img"/>
              <div className="shortage text">暂时缺货</div>
            </div>
            <div className="goods-name">商品名称</div>
            <div className="goods-info">
              <span>1000000积分</span>
              <span>已兑换9999次</span>
            </div>
          </li>
          <li>
            <div className="img-wrapper">
              <img data-src={require('@/assets/img/iphone.png')} className="img"/>
            </div>
            <div className="goods-name">商品名称</div>
            <div className="goods-info">
              <span>1000000积分</span>
              <span>已兑换9999次</span>
            </div>
          </li>
          
          <li>
            <div className="img-wrapper">
              <img data-src='https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png' className="img"/>
            </div>
            <div className="goods-name">商品名称</div>
            <div className="goods-info">
              <span>1000000积分</span>
              <span>已兑换9999次</span>
            </div>
          </li>
          <li>
            <div className="img-wrapper">
              <img data-src='https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png' className="img"/>
            </div>
            <div className="goods-name">商品名称</div>
            <div className="goods-info">
              <span>1000000积分</span>
              <span>已兑换9999次</span>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Goods;
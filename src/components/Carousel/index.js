import React, { PureComponent } from 'react';
import { Carousel } from 'antd-mobile';
import { holdify } from 'react-hold';
import './index.less';

const img = require('@/assets/img/sw.png');

@holdify((props) => !props.imgs)
class CarouselComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dotStyle = {
      width: '5px',
      height: '5px',
      background: 'rgba(255,255,255,1)',
      borderRadius: '3px',
      opacity: 0.8,
      marginBottom: '10px'
    };
    const dotActiveStyle = {
      width: '15px',
      height: '5px',
      background: 'rgba(255,255,255,1)',
      borderRadius: '3px',
      opacity: 0.8,
      marginBottom: '10px'
    };
    const {imgs} = this.props;
    return (
      <div className="carrousel-wrapper">
        <Carousel
          autoplay={true}
          infinite
          dotStyle={dotStyle}
          dotActiveStyle={dotActiveStyle}
        >
          {
            imgs && imgs.map((item, index) => {
              return <a href="#" className="carrousel-item" key={`img-${index}`}>
                <img src={item} />
              </a>
            })
          }
        </Carousel>
      </div>   
    )
  }
}

export default CarouselComponent; 
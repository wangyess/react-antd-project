import React, { Component } from 'react'
import './index.css'
import { Carousel } from 'antd';

class CarouselImg extends Component {
  render() {
    return (
      <div>
        <Carousel effect="scrollx" autoplay  dots>
          <div className="img-box-1">
            <h3>This is  a good image</h3>
          </div>
          <div className="img-box-2">
            <h3>This is  a good image</h3>
          </div>
          <div className="img-box-3">
            <h3>This is  a good image</h3>
          </div>
          <div className="img-box-4">
            <h3>This is  a good image</h3>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default CarouselImg
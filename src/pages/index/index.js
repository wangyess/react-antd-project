import React, { Component } from 'react';
import './index.css'

import { Route } from "react-router-dom";

import { Row, Col } from 'antd';

import Header from '../../components/header/header'
import Home from '../../components/home/index';
import Template from '../../components/template/index';

class Index extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div>
        {/* header 头部 */}
        <Row className="header-box">
          <Col span={22} offset={1}>
            <div className="header">
              <Header router={this.props} />
            </div>
          </Col>
        </Row>
        {/* content 内容区 */}
        <Row>
          <Col span={22} offset={1}>
            {/* 想在这里  动态的切换  /home   /template   这下面  该怎么写 */}
              <div className="content">
                  <Route  path="/home" component={Home} />
                  <Route  path="/template" component={Template} />
              </div>
          </Col>
        </Row>
        {/* footer 底部 */}
        <Row>
          <Col span={22} offset={1}>
            <div className="footer">footer</div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index;
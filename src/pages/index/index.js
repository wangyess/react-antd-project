import React, { Component } from 'react';
import './index.css'

import { Route } from "react-router-dom";

import { Row, Col } from 'antd';

import Header from '../../components/header/header'
import Home from '../../components/home/index';
import Template from '../../components/template/index';

class Index extends Component {
  render() {
    return (
      <div className="setMinHeight">
        {/* header 头部 */}
        <Row className="header-box">
          <Col span={22} offset={1} >
            <div className="header">
              <Header router={this.props} />
            </div>
          </Col>
        </Row>
        {/* content 内容区 */}
        <Row>
          <Col span={22} offset={1}>
            <div className="content">
              <Route exact strict path="/index" component={Home} />
              <Route exact strict path="/index/template" component={Template} />
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
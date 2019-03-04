import React, { Component } from 'react';
import './index.css'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Row, Col } from 'antd';

import Header from '../../components/header/header'
import Home from '../../components/home/index';
import Template from '../../components/template/index';

class Index extends Component {
  render() {
    return (
      <div>
        {/* header 头部 */}
        <Row className="header-box">
          <Col span={22} offset={1}>
            <div className="header">
              <Header router={this.props.history} />
            </div>
          </Col>
        </Row>
        {/* content 内容区 */}
        <Row>
          <Col span={22} offset={1}>
            {/* 想在这里  动态的切换  /home   /template   这下面  该怎么写 */}
            <Router>
              <div className="content">
                <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/template" component={Template}></Route>
                </Switch>
              </div>
            </Router>
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
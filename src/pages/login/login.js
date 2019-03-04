import React, { Component } from 'react';
import './index.css';
import logo from './logo.svg';
import { Input, Checkbox, Button, Alert } from 'antd'

class Login extends Component {
  state = {
    prompt: false,
    message: '',
    useranme: null,
    password:null,
  }
  
   promptBox() {
    // 提示信息
    return (
      <div className="prompt-box">
        <Alert message={this.state.message} type="warning" showIcon closeText="Close Now" onClose={this.closePrompt.bind(this)} />
      </div>
    )
  }

  closePrompt() {
    // 关闭提示回调
    this.setState({
      prompt: false,
      message: ''
    })
  }

  handleCheck(e) {
    // remeber me
    console.log(e.target.checked)
  }

  handleCreateOne() {
    // 去注册
    this.setState({
      prompt: true,
      message:'Please wait 5 seconds before trying I here'
    })
  }

  handleSubmit() {
    // 登陆提交
   const userDetails ={
     username:this.state.username,
     password:this.state.password
   }
   console.log(userDetails)
  }

  handleInput(e){
    // input 赋值
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
     [name] : value
    })
  }

  render() {
    return (
      <div className="box">
        {/* 提示 */}
        {this.state.prompt ? this.promptBox() : null}
        {/* logo */}
        <div className="logo-box">
          <div className="logo">
            <img src={logo} alt="react-logo" />
          </div>
        </div>
        {/* login */}
        <div className="login-box">
          <div className="item">
            <h2>Login</h2>
          </div>
          <div className="item">
            <label htmlFor="username">User-Name</label>
            <Input value={this.state.username} onChange={this.handleInput.bind(this)} name="username" type="text" id='username' placeholder="Please enter user name" style={{ marginTop: "10px" }} />
          </div>
          <div className="item">
            <label htmlFor="password">User-Name</label>
            <Input value={this.state.password} onChange={this.handleInput.bind(this)} name="password" type="password" id='password' placeholder="Please enter password" style={{ marginTop: "10px" }} />
          </div>
          <div className="item">
            <Checkbox onChange={this.handleCheck.bind(this)}>Remeber Me</Checkbox>
          </div>
          <div className="item">
            <Button type="primary" onClick={this.handleSubmit.bind(this)} block>Login</Button>
          </div>
          <div className="item sign-up-box">
            <p>Don't have an account? <span className="create-one" onClick={this.handleCreateOne.bind(this)} >Create One</span></p>
          </div>
        </div >
      </div >
    )
  }
}

export default Login;
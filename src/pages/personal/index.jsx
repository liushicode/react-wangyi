import React, { Component } from 'react'
import {Button} from 'antd-mobile'

import './index.less'

class Personal extends Component {
  goPath = (path) => {
    return () => {
      this.props.history.push(path)
    }
  }
  render() {
    return <div className="person_container">
      <div className="person_header">
        <i className="iconfont icon-home" onClick={this.goPath('/home')} ></i>
      <span className="title">网易严选</span>
        <i className="iconfont icon-sousuo" onClick={this.goPath('/search')}></i>
        <i className="iconfont icon-gouwuche1" onClick={this.goPath('/shopcart')}></i >
    </div >
      <div className="person_content">
        <div className="logoImg">
          <img src={require("../.../../../common/loginImg.png")} alt="" />
      </div>
        <div className="btns">
          <Button type="warning" className="phoneBtn">手机号快捷登录</Button>
          <Button type="warning" className="mailBtn">邮箱账号登录</Button>
      </div>
      <div className="person_footer">
        <ul className="link">
          <li><i className="iconfont icon-weixin"></i> <span>微信</span></li>
          <li><i className="iconfont icon-QQ"></i> <span>QQ</span></li>
          <li><i className="iconfont icon-weibo"></i> <span>微博</span></li>
        </ul>
      </div>
    </div >
  </div >
  }
}
export default Personal

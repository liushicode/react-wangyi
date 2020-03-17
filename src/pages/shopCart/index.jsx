import React, { Component } from 'react'
import { Button } from 'antd-mobile'

import './index.less'

class ShopCart extends Component {
  goLogin = () => {
    this.props.history.push('/personal')
  }
  render() {
    return (
      <div className="shopcart-container">
        <div className="cart_header">
          <span className="left">购物车</span>
          <span className="right">领券</span>
        </div>
        <div className="cart_service">
          <ul>
            <li>
              <i className="iconfont icon-circle1"> 30天无忧退货</i>
            </li>
            <li>
              <i className="iconfont icon-circle1"> 48小时快速退款</i>
            </li>
            <li>
              <i className="iconfont icon-circle1"> 满88元免邮费</i>
            </li>
          </ul>
        </div>
        <div className="cart_page">
          <div className="cart_img">
            <img src={require("../../common/shopcart.png")} alt="" />
            <span className="text">去添加点什么吧</span>
          </div>
          <Button className="loginBtn" type="warning" onClick={this.goLogin}>登录</Button>
        </div>
      </div>
    )
  }
}
export default ShopCart

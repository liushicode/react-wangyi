import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer_guide">
        <Link to="/home" className="iconfont icon-home">
          <span className="iconText">首页</span>
        </Link>
        <Link to="/category" className="iconfont icon-fenlei">
          <span className="iconText">分类</span>
        </Link>
        <Link to="/buy" className="iconfont icon-tuku">
          <span className="iconText">值得买</span>
        </Link>
        <Link to="shopcart" className="iconfont icon-gouwuche1">
          <span className="iconText">购物车</span>
        </Link>
        <Link to="personal" className="iconfont icon-geren">
          <span className="iconText">个人</span>
        </Link>
      </footer>
    )
  }
}

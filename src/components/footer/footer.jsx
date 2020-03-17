import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom'


import './index.less'


@withRouter//可使用路由组件三大属性
class Footer extends Component {
  state = {
    isShowFooter: true
  }
  componentDidMount () {
    let { pathname } = this.props.location
    if (pathname === '/personal' || pathname === '/login') {
      this.setState({
        isShowFooter: false
      })
    }
  }
  render () {
    // 获取当前的pathname，用于比对判断
    let { pathname } = this.props.location
    const { isShowFooter } = this.state
    return (
      <footer className="footer_guide" style={{display:(pathname ==='/search'|| pathname==='/personal')?'none':''}}>
        <Link
          to="/home/first"
          className={`iconfont icon-home ${pathname.includes('/home') ? 'on' : null}`}
        >
          <span className="iconText">首页</span>
        </Link>
        <Link
          to="/category"
          className={`iconfont icon-fenlei ${pathname.includes('/category') ? 'on' : null}`}
        >
          <span className="iconText">分类</span>
        </Link>
        <Link
          to="/buy"
          className={`iconfont icon-tuku ${pathname === '/buy' ? 'on' : null}`}
        >
          <span className="iconText">值得买</span>
        </Link>
        <Link
          to="/shopcart"
          className={`iconfont icon-gouwuche1 ${pathname === '/shopcart' ? 'on' : null}`}>
          <span className="iconText">购物车</span>
        </Link>
        <Link
          to="/personal"
          className={`iconfont icon-geren ${pathname === '/personal' ? 'on' : null}`}
        >
          <span className="iconText">个人</span>
        </Link>
      </footer>
    )
  }
}
export default Footer
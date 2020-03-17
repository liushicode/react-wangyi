import React, { Component } from 'react'
import { Button,Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'

import './index.less'
import { getHomeNavAsync } from '../../redux/actions'
import First from './first/First'

@connect(state => ({ homeNav: state.homeNav }), {
  getHomeNavAsync
})
class Home extends Component {
  state = {
    isShowPullNav:'none'
  }
  componentDidMount() {
    if (!this.props.homeNav.length) {
      this.props.getHomeNavAsync()
    }
    // 生成首页导航滚动条
    new BScroll('.navBar', {
      click: true,
      scrollX: true
    })
  }
  // 点击跳转页面
  goPath = path => {
    return () => {
      this.props.history.push(path)
    }
  }
  // 控制下拉导航是否显示
  switchPullNav = (sign) => {
    return () => {
      if (sign) {
        this.setState({
          isShowPullNav: 'block'
        })
      } else {
        this.setState({
          isShowPullNav:'none'
        })
      }
    }
  }
  render() {
    const { homeNav } = this.props
    // 获取当前组件的路径地址
    const pathname = this.props.location.pathname
    const { isShowPullNav } = this.state
    return (
      <div className="home_container">
        <div className="header">
          <div className="home_header">
            <h1 className="logo" onClick={this.goHome}>
              网易严选
            </h1>
            <input
              className="search iconfont"
              type="text"
              placeholder="&#xe618;搜索商品，共23572款好物"
              onClick={this.goPath('/search')}
            />
            <Button className="loginBtn" type="default">
              登录
            </Button>
          </div>
          <div className="home_nav">
            <div className="pullDown">
              <Icon type="down" onClick={this.switchPullNav(true)} />
            </div>
            <div className="pullNav" style={{ display: isShowPullNav }}>
              <p className="allNav">
                <span>全部频道</span>
                <Icon
                  type="up"
                  className="rightArrow"
                  onClick={this.switchPullNav(false)}
                />
              </p>
              <ul>
                <li
                  onClick={this.goPath('/home/first')}
                  className={(pathname === '/home/first' || pathname === '/home') ? 'on' : null}
                >
                  推荐
                </li>
                {homeNav.map((navItem, index) => {
                  return (
                    <li
                      key={index}
                      onClick={this.goPath(`/home/second/${index}`)}
                      className={
                        pathname === `/home/second/${index}` ? 'on' : null
                      }
                    >
                      {navItem.text}
                    </li>
                  )
                })}
              </ul>
              <div className="mask"></div>
            </div>
            <div className="navBar">
              <ul className="nav_ul">
                <li
                  onClick={this.goPath('/home/first')}
                  className={(pathname === '/home/first' || pathname === '/home') ? 'on' : null}
                >
                  推荐
                </li>
                {homeNav.map((navItem, index) => {
                  return (
                    <li
                      key={index}
                      onClick={this.goPath(`/home/second/${index}`)}
                      className={
                        pathname === `/home/second/${index}` ? 'on' : null
                      }
                    >
                      {navItem.text}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <First homeNav={homeNav} />
      </div>
    )
  }
}
export default Home

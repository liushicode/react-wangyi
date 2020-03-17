import React, { Component } from 'react'
import { reqWorthNav, reqLookList } from '../../api'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import './index.less'

class WorthBuy extends Component {
  state = {
    navlist: [],
    topics: []
  }
  async componentDidMount() {
    this.topics = []
    let navlist = await reqWorthNav().then(res => {
      return res.data.data
    })
    let bigArr = []
    for (let i = 0; i < navlist.length / 2; i++) {
      let smallArr = []
      smallArr.push(navlist[i])
      smallArr.push(navlist[navlist.length / 2 + i])
      bigArr.push(smallArr)
      smallArr = []
    }
    const looklist = await reqLookList().then(res => {
      return res.data.data
    })
    this.adPicUrl = looklist[0].ad.picUrl
    looklist.forEach((look, index) => {
      look.topics.forEach((topic, index) => {
        this.topics.push(topic)
      })
    })
    this.setState({
      navlist: bigArr,
      topics: this.topics
    })
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      observer: true //修改swiper自己或子元素时，自动初始化swiper
    })
  }
  handleClick = () => {
    console.log(this)
  }
  render() {
    const { navlist, topics } = this.state
    console.log(navlist)

    return (
      <div className="buy_container">
        <div className="buy_header">
          <i className="iconfont icon-home"></i>
          <span className="title" onClick={this.handleClick}>
            值得买
          </span>
          <i className="iconfont icon-sousuo"></i>
          <i className="iconfont icon-gouwuche1"></i>
        </div>
        <div className="buy_content" ref="buyContent">
          <div className="mask">
            <span className="text">值得买</span>
            <span className="title">严选好物，用心生活</span>
          </div>
          <div className="nav_list">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {navlist.map((navArr, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      {
                        navArr.map((nav, index) => {
                          return <a href="" key={index}>
                            <img src={nav.picUrl} alt="" />
                            <span className="name">{nav.mainTitle}</span>
                            <span className="descText">{nav.viceTitle}</span>
                          </a>
                        })
                      }
                    </div>
                  )
                })}
              </div>
              <div className="swiper-scrollbar"></div>
            </div>
          </div>
          <div className="lookList">
            <ul className="shopdatas">
              <li className="ad">
                <img className="adImg" src={this.adPicUrl} alt="" />
              </li>
              {topics.map((topic, index) => {
                return (
                  <li key={index}>
                    <img
                      className="shopImg"
                      src={topic.newAppBanner || topic.picUrl}
                      alt=""
                    />
                    <p className="title">{topic.title}</p>
                    <div className="user_info">
                      <div className="info">
                        <img src={topic.avatar} alt="" />
                        <span className="name">{topic.nickname}</span>
                      </div>
                      <div className="count">
                        <i className="iconfont icon-eye"></i>
                        <span>{topic.readCount}</span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default WorthBuy

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Swiper from 'swiper/js/swiper'
import 'swiper/css/swiper.min.css'

import './index.less'
import { getHomeDatasAsync } from '../../../redux/actions'

@connect(state => ({ homeDatas: state.homeDatas }), {
  getHomeDatasAsync
})
class First extends Component {
  static propTypes = {
    homeNav: PropTypes.array
  }
  state = {
    swipers: [],
    descList: [],
    categorys: [],
    hotsells:[]
  }
  async componentDidMount() {
    await this.props.getHomeDatasAsync()
    const { homeDatas } = this.props
    // 获取轮播图数据
    const swipers = homeDatas.focusList
    // 描述信息
    const descList = homeDatas.policyDescList
    // 热卖榜
    const hotsells = homeDatas.categoryHotSellModule.categoryList
    this.setState({
      swipers,
      descList,
      hotsells
    })
    // 首页轮播图
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2000 //1秒切换一次
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      observer: true
    })
  }
  render() {
    const { swipers, descList,hotsells } = this.state
    const categorys = this.props.homeNav
    return (
      <div className="home_content">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {swipers.map((swiper, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={swiper.picUrl} alt="" />
                </div>
              )
            })}
          </div>
          <div className="swiper-scrollbar"></div>
        </div>
        <div className="home_desc">
          <ul>
            {descList.map((desc, index) => {
              return (
                <li key={index}>
                  <img src={desc.icon} alt="" />
                  <span>{desc.desc}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="home_category">
          <ul>
            {categorys.map((category, index) => {
              return (
                <li key={index}>
                  <img src={category.picUrl} alt="" />
                  <span>{category.text}</span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="newPerson_container">
          <h3 className="title">- 新人专享礼 -</h3>
          <div className="card">
            <div className="left">
              <img src={require('./img/card1.png')} alt="" />
              <span className="text">新人专享礼包</span>
            </div>
            <div className="right">
              <div className="right_top">
                <img src={require('./img/card2.webp')} alt="" />
                <p>福利社</p>
                <span>今日特价</span>
              </div>
              <div className="right_bottom">
                <span className="text1">新人拼团</span>
                <p className="text2">1元起包邮</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hot_sell">
          <p className="title">类目热销榜</p>
          <ul>
            {hotsells.map((hotsell, index) => {
              return (
                <li key={index}>
                  <span>{hotsell.categoryName}</span>
                  <img src={hotsell.picUrl} alt="" />
                </li>
              )
            })}
          </ul>
        </div>
        <div className="home_footer">
          <div className="footerBtns">
            <a href="javscript:;">下载App</a>
            <a href="javscript:;">电脑版</a>
          </div>
          <div className="footerContent">
            <p>网易公司版权所有 &copy; 1997-2020</p>
            <p>食品经营许可证：JY13301080111719</p>
          </div>
        </div>
      </div>
    )
  }
}
export default First

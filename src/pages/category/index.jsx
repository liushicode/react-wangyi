import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategoryNavAsync, getCategoryDataAsync } from '../../redux/actions'
import BScroll from 'better-scroll'

import './index.less'

@connect(
  state => ({
    categoryNav: state.categoryNav,
    categoryData: state.categoryData
  }),
  {
    getCategoryNavAsync,
    getCategoryDataAsync
  }
)
class Category extends Component {
  state = {
    number: 0, //当前选中导航索引
    activeNav: {}, //当前选中导航对象
    activeData:[]
  }
  async componentDidMount() {
    await this.props.getCategoryNavAsync()
    await this.props.getCategoryDataAsync()
    this.leftScroll = new BScroll('.side_nav', {
      click: true
    })
    const { number } = this.state
    const { categoryNav, categoryData } = this.props
    this.setState({
      activeNav: categoryNav[number],
      activeData: categoryData[number].categoryList,
    })
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (this.state !== nextState) {
      return true
    }
    return false
  }
  goPath = path => {
    return () => {
      this.props.history.push(path)
      const number = path.slice(-1)
      localStorage.setItem('nav_key',number)
      setTimeout(() => {
        this.setState({
          number: number,
          activeNav: this.props.categoryNav[number],
          activeData: this.props.categoryData[number].categoryList || this.props.categoryData[number].subCateList
        })
      },0)
    }
  }
  render() {
    const { pathname } = this.props.location
    const { categoryNav } = this.props
    const { activeNav, activeData, number } = this.state
    return (
      <div className="category_container">
        <div className="header">
          <input
            type="text"
            className="search iconfont"
            placeholder="&#xe618;搜索商品，共23572款好物"
            onClick={this.goPath('search')}
          />
        </div>
        <div className="category_content">
          <div className="side_nav">
            <ul>
              {categoryNav.map((category, index) => {
                return (
                  <li
                    className={`side_item ${
                      ((pathname === `/category/:${index}`) ||(pathname==='/category' && index === 0)) ? 'on' : null
                    }`}
                    key={index}
                    onClick={this.goPath(`/category/:${index}`)}
                  >
                    {category.name}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="category_datas">
            <div className="categoryImg">
              <div className="categoryImg">
                <img src={activeNav.bannerUrl} alt="" />
              </div>
              <div className="categoryList">
                {
                  number < 4 ? <ul>
                    {activeData.map((item, index) => {
                      return (
                        <li key={index}>
                          <img src={item.bannerUrl} alt='' />
                          <span>{item.name}</span>
                        </li>
                      )
                    })}
                  </ul> : <ul>
                    {activeData.map((item, index) => {
                    return (
                      <li key={index}>
                        <img src={item.wapBannerUrl} alt='' />
                        <span>{item.name}</span>
                      </li>
                    )
                  })}
                  </ul>
                }
                
              </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Category

import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { connect } from 'react-redux'

import { getSearchInfoAsync } from '../../redux/actions'
import './index.less'

@connect(state => ({ searchInfo: state.searchInfo }), {
  getSearchInfoAsync
})
class Search extends Component {
  state = {
    defaultKeyword: '',
    hotKeywordVOList: [],
    isShowClear: false,
    searchText:''
  }
  async componentDidMount() {
    await this.props.getSearchInfoAsync()
    const { defaultKeywords, hotKeywordVOList } = this.props.searchInfo
    // 定义一个随机数
    const number = Math.floor(Math.random() * (defaultKeywords.length + 1))
    // 获取一个随机的默认keyword
    let defaultKeyword = defaultKeywords[number].keyword
    this.setState({
      defaultKeyword,
      hotKeywordVOList
    })
  }
  goBack = () => {
    this.props.history.goBack()
  }
  handleChange = (e) => {
    const value = e.target.value
    if (value) {
      this.setState({
        isShowClear: true,
      })
    } else {
      this.setState({
        isShowClear:false
      })
    }
    this.setState({
      searchText:value
    })
  }
  clearSearchText = () => {
    this.setState({
      searchText: '',
      isShowClear: false
    })
  }
  render() {
    const { defaultKeyword, hotKeywordVOList,isShowClear,searchText } = this.state
    return (
      <div className="search_container">
        <div className="search_header">
          <input
            type="text"
            className="searchInput"
            placeholder={defaultKeyword}
            value={searchText}
            onChange={this.handleChange}
          />
          <Icon type="cross" className="clear"
            style={{ display: isShowClear ? 'block' : 'none' }}
            onClick={this.clearSearchText}
          />
          <span className="cancel" onClick={this.goBack}>取消</span>
        </div>
        <div className="search_content" style={{ display: isShowClear ? 'none' : 'block' }}>
          <h3 className="title">热门搜索</h3>
          <ul className="keywordList">
            {hotKeywordVOList.map((keyWord, index) => {
              return (
                <li
                  key={index}
                  className={keyWord.highlight === 1 ? 'on' : null}
                >
                  <a href="">{keyWord.keyword}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Search

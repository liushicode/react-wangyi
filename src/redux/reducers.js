/**
 * 根据prevState和action生成newState
 */
import { combineReducers } from 'redux';
import { GET_HOME_NAV,GET_HOME_DATAS,GET_SEARCH_INFO,GET_CATEGORY_NAV,GET_CATEGORY_DATA } from './action-types'
const initHomeNav = []
// 首页导航信息
function homeNav(prevState = initHomeNav, action) {
  switch (action.type) {
    case GET_HOME_NAV:
      //console.log(action.data)
      return action.data
    default:
      return prevState
  }
}
// 首页内容信息
function homeDatas (prevState = {}, action) {
  switch (action.type) {
    case GET_HOME_DATAS:
      return action.data
    default:
      return prevState
  }
}
// 搜索信息
function searchInfo (prevState = {}, action) {
  switch (action.type) {
    case GET_SEARCH_INFO:
      return action.data
    default:
      return prevState
  }
}
// 分类页面信息
function categoryNav (prevState = [], action) {
  switch (action.type) {
    case GET_CATEGORY_NAV:
      return action.data
    default:
      return prevState
  }
}
// 分类页面内容信息
function categoryData (prevState = [], action) {
  switch (action.type) {
    case GET_CATEGORY_DATA:
      return action.data
    default:
      return prevState
  }
}

export default combineReducers({
  homeNav,
  homeDatas,
  searchInfo,
  categoryNav,
  categoryData
})
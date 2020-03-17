/**
 * 定义action对象，是一个数据结构
 * dispatch一个action，才能改变state中数据
 */
import { GET_HOME_NAV,GET_HOME_DATAS,GET_SEARCH_INFO,GET_CATEGORY_NAV,GET_CATEGORY_DATA } from './action-types'
import { reqHomeNav,reqHomeDatas,reqSearchInfo,reqCategoryNav,reqCategoryData} from '../api'

// 获取首页导航信息
const getHomeNav = homeNav => ({ type: GET_HOME_NAV, data:homeNav.data })
export const getHomeNavAsync = () => {
  return dispatch => {
    return reqHomeNav().then(response => {
      dispatch(getHomeNav(response.data))
    })
  }
}
// 获取首页内容信息
const getHomeDatas = homeDatas => ({ type: GET_HOME_DATAS, data: homeDatas.data })
export const getHomeDatasAsync = () => {
  return dispatch => {
    return reqHomeDatas().then(res => {
      dispatch(getHomeDatas(res.data))
    })
  }
}
// 获取搜索相关信息
const getSearchInfo = searchInfo => ({ type: GET_SEARCH_INFO, data: searchInfo.data })
export const getSearchInfoAsync = () => {
  return dispatch => {
    return reqSearchInfo().then(res => {
      dispatch(getSearchInfo(res.data))
    })
  }
}

// 分类导航信息
const getCategoryNav = nav =>({type:GET_CATEGORY_NAV,data:nav.data})
export const getCategoryNavAsync = () => {
  return dispatch => {
    return reqCategoryNav().then(res => {
      dispatch(getCategoryNav(res.data))
    })
  }
}
// 分类数据
const getCategoryData = categoryData =>({type:GET_CATEGORY_DATA,data:categoryData.data})
export const getCategoryDataAsync = () => {
  return dispatch => {
    return reqCategoryData().then(res => {
      dispatch(getCategoryData(res.data))
    })
  }
}


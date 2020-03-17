import axios from 'axios'
// 请求首页导航信息
export const reqHomeNav = () => axios.get('/home/nav')
// 请求首页内容信息
export const reqHomeDatas = () => axios.get('/home/datas')
// 请求搜索相关信息
export const reqSearchInfo = () => axios.get('/search')
// 请求分类页面导航数据
export const reqCategoryNav = ()=>axios.get('/category/nav')
// 请求分类页面内容数据
export const reqCategoryData = () => axios.get('/category/data')

export const reqWorthNav = () => axios.get('/navwap')
export const reqLookList = ()=>axios.get('/looklist')
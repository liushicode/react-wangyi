import Mock from 'mockjs'
// 首页数据
let indexDatas = require('./datas/index.json')
// 分类页面数据
let cateNavDatas = require('./datas/cateNavDatas.json')
let cateLists = require('./datas/cateLists.json')
// 值得买界面nav模块数据
let navWap = require('./datas/buy/navWap.json')
let recManual = require('./datas/buy/recManual.json')
let secAuto = require('./datas/recAuto.json')
// 搜索界面数据
let search = require('./datas/search.json')

// 首页
// Mock.mock('/home/nav', { code: 0, data: index.kingKongModule.kingKongList })
Mock.mock('/home/nav', { code: 0, data: indexDatas.kingKongModule.kingKongList })
// Mock.mock('/home/swiper', { code: 0, data: index.focusList})
Mock.mock('/home/datas', { code: 0, data: indexDatas })

// 分类页面
Mock.mock('/category/nav', { code: 0, data: cateNavDatas.categoryL1List })
Mock.mock('/category/data', { code: 0, data: cateLists})

// 拦截请求，生成值得买界面数据
Mock.mock('/navwap', { code: 0, data: navWap.data.navList })
Mock.mock('/looklist', { code: 0, data: recManual.data })
Mock.mock('/lazylist', { code: 0, data: secAuto.data.result })

// 搜索界面数据
Mock.mock('/search', { code: 0, data: search.data })

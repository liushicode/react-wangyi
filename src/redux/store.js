/**
 * 创建store对象
 */
// applyMiddleware用来添加中间件
import { createStore, applyMiddleware } from 'redux'
// 引入redux-thunk中间件
import thunk from 'redux-thunk'
// 浏览器插件
import { composeWithDevTools } from 'redux-devtools-extension'
// 引入reducers
import reducers from './reducers'

export default createStore(
  reducers,
  process.env.NODE_ENV === 'development'//判断当前是开发环境还是生产环境，开发环境需要使用浏览器插件
  ? composeWithDevTools(applyMiddleware(thunk))
  : applyMiddleware(thunk)
)

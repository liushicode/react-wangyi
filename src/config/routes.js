import Home from '../pages/home'
import Category from '../pages/category'
import WorthBuy from '../pages/worthBuy'
import ShopCart from '../pages/shopCart'
import Personal from '../pages/personal'
import Search from '../pages/search'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true//全匹配
  },
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/category',
    component: Category,
    exact: true
  },
  {
    path: '/buy',
    component: WorthBuy,
    exact: true
  },
  {
    path: '/shopcart',
    component: ShopCart,
    exact: true
  },
  {
    path: '/personal',
    component: Personal,
    exact: true
  },
  {
    path: '/search',
    component: Search,
    exact: true
  }
]
export default routes
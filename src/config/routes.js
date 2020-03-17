import Home from '../pages/home'
import Category from '../pages/category'
import WorthBuy from '../pages/worthBuy'
import ShopCart from '../pages/shopCart'
import Personal from '../pages/personal'
import Search from '../pages/search'

import First from '../pages/home/first/First'
import Second from '../pages/home/second/Second'

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/first',
        component: First,
        exact: true
      },
      {
        path: '/home/second:id',
        component: Second,
        exact: true
      },
    ]
  },
  {
    path: '/category',
    component: Category,
    children: {
      path: '/category/:id',
      component:Category
    }
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
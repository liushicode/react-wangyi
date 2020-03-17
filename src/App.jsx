import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Footer from './components/footer/footer'
// 引入路由
import routes from './config/routes'

class App extends Component {
  componentDidUpdate (prevProps) {
    // 典型用法（不要忘记比较 props）：
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
      console.log('haha')
    }
    console.log('haha')
  }
  // state = {
  //   username: ''
  // }
  // 高阶函数，给内部函数传参
  // handleChange = key => {
  //   return e => {
  //     const value = e.target.value
  //     console.log(this)
  //     this.setState({
  //       [key]: value
  //     })
  //     //const text = this.inputRef.current.value
  //     // console.log(text);
  //   }
  // }
  render() {
    // const { username } = this.staten
    return (
      <div>
        {/* <input type="text" onChange={this.handleChange('username')} value={username} /> */}
        <Router>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  exact={route.exact} //全匹配
                  key={route.path}
                />
              )
            })}
            {/* 重定向 */}
            <Redirect to="/home/first"/>
          </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App

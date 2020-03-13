import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/footer/footer'

import routes from './config/routes'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {routes.map((route, index) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                exact={route.exact}
                key={route.path}
              />
            )
          })}
          {/* </Router><Route path={/home} component={Home} /> */}
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App

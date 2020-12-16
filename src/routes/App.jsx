import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from '../components/Layout';
import * as Page from '../containers/index';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Page.Home} />
        <Route exact path='/checkout' component={Page.Checkout} />
        <Route exact path='/checkout/information' component={Page.Information} />
        <Route exact path='/checkout/payment' component={Page.Payment} />
        <Route exact path='/checkout/success' component={Page.Success} />
        <Route component={Page.NotFound} />
      </Switch>
    </Layout>
  </Router>
  )

export default App;

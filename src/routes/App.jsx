import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from '../components/Layout';
import * as Page from '../containers/index';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  console.log('initialState',initialState)
  return(
    <AppContext.Provider value={initialState}>
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
    </AppContext.Provider>
  )
}

export default App;

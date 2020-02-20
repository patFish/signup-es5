import React from 'react'
import './App.css'
import RiskForm from './container/RiskForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Paper } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Paper>
        <Router>
          <Switch>
            <Route exact path={'/'} render={props => <RiskForm {...props} />} />
          </Switch>
        </Router>
      </Paper>
    </div>
  )
}

export default App

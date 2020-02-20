import React from 'react'
import './App.css'
import RiskForm from './container/RiskForm'
import { Paper, CssBaseline, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <CssBaseline />
      <div className={classes.layout}>
        <Paper className={classes.paper}>
          <RiskForm />
        </Paper>
      </div>
    </div>
  )
}

export default App

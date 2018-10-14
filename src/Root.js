import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PhotoList from './PhotoList'
import Photo from './Photo'

const Root = () => (
  <Router >
    <Switch>
      <Route exact path="/:id" component={Photo} />
      <Route path="/" component={PhotoList}/>
    </Switch>
  </Router>
)

export default Root

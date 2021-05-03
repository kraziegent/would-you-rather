import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import {handleInitialData} from '../actions/shared';
import NewQuestion from './NewQuestion';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Answer from './Answer';
import Nav from './Nav';
import Login from './Login';
import FourZeroFour from './FourZeroFour';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const {authedUser} = this.props;

    return (
      <div className='container'>
        <Nav authedUser={authedUser} />
        {authedUser === null ?
          <Login />
          :<div>
            <LoadingBar style={{ backgroundColor: 'green', height: '5px' }} />

            <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/questions/:question_id' component={Answer} />
              <Route component={FourZeroFour} />
            </Switch>
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser,
  }
}

export default withRouter(connect(mapStateToProps)(App));

import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import {handleInitialData} from '../actions/shared';
import NewQuestion from './NewQuestion';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Answer from './Answer';
import Nav from './Nav';
import Login from './Login';
import { logout } from '../actions/authedUser';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const {authedUser, location, dispatch, history} = this.props;

    if(location && location.pathname === '/logout') {
      dispatch(logout());
      history.push('/');
    }

    return (
      <div className='container'>
        <Nav authedUser={authedUser} />
        {authedUser === null ?
          <Login />
          :<div>
            <LoadingBar style={{ backgroundColor: 'green', height: '5px' }} />
          
            <Route path='/' exact component={Dashboard} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/questions/:question_id' component={Answer} />
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

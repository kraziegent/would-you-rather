import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { logout } from '../actions/authedUser';

function Nav (props) {
    const {user, dispatch} = props;

    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/add' activeClassName='active'>
                        New Question
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
                        Leader Board
                    </NavLink>
                </li>
                {user === null ? null :
                    <div className='ul'>
                        <li>
                            {`Hello, ${user.name}`}
                        </li>
                        <li>
                            <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="" />
                        </li>
                        <li>
                            <a href='/' onClick={() => doLogout(dispatch)}>
                                Logout
                            </a>
                        </li>
                    </div>
                }
            </ul>
        </nav>
    )
}

function doLogout(dispatch) {
    dispatch(logout());
}

function mapStateToProps({users}, {authedUser}) {
    const user = authedUser !== null ? users[authedUser] : null;

    return {
        user,
    }
}

export default connect(mapStateToProps)(Nav);
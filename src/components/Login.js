import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authedUser";
import Logo from '../logo.svg';

class Login extends Component {
    state = {
        user: '',
    }

    handleChange = (e) => {
        this.setState({
            user: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {user} = this.state;
        const {dispatch} = this.props;

        dispatch(login(user));
    }

    render() {
        const {users} = this.props;

        return (
            <div className='box'>
                <div className='box-header center'>
                    Welcome to the Would You Rather App!
                    <p>Please sign in to continue</p>
                </div>
                <div className='box-body'>
                    
                    <form className='box-info box-form' onSubmit={this.handleSubmit}>
                        <img src={Logo} alt='React Logo' className="logo" />
                        <div className='center signin'>Sign In</div>
                        <select value={this.state.user} className='input' onChange={this.handleChange} required>
                            <option value='' disabled>Select User</option>
                            {Object.keys(users).map((key) => (
                                <option key={key} value={key}>{users[key].name}</option>
                            ))}
                        </select>
                        <button className='btn'>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users,
    }
}

export default connect(mapStateToProps)(Login);
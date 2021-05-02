import React from 'react';
import { connect } from 'react-redux';
import { score } from '../utils/helpers';
import User from './User';

function Leaderboard(props) {
    const {userIds} = props;

    return (
        <div>
            {userIds.map((id) => (
                <User key={id} id={id} />
            ))}
        </div>
    )
}

function mapStateToProps({users}) {

    return {
        userIds: Object.keys(users).sort((a,b) => score(users[b]) - score(users[a])),
    }
}

export default connect(mapStateToProps)(Leaderboard);
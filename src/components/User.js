import React from 'react';
import { connect } from 'react-redux';
import { score } from '../utils/helpers';

function User(props) {
    const {user, score} = props;

    return (
        <div className='box'>
            <div className='box-body'>
                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="avatar" />
                <div className='box-info'>
                    <h3>{user.name}</h3>
                    <p>Answered Questions <span>{Object.keys(user.answers).length}</span></p>
                    <p>Created Questions <span>{user.questions.length}</span></p>
                </div>
                <div className='box-info box-info-sm'>
                    <div className='box box-tn'>
                        <div className='box-header'>Score</div>
                        <div className='score'>
                            {score}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({users}, props) {
    const user = users[props.id];

    return {
        user,
        score: score(user),
    }
}

export default connect(mapStateToProps)(User);
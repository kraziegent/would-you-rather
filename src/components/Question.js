import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Question(props) {
    const {question, user, id} = props;

    return (
        <div className='box box-sm'>
            <div className='box-header'>{`${user.name} asks:`}</div>
            <div className='box-body'>
                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="avatar" />
                <div className='box-info'>
                    <h3>Would You Rather</h3>
                    <span>...{question.optionOne.text.substr(0, 15)}...</span>
                    <Link to={`/questions/${id}`} className='btn btn-outline center'>View Poll</Link>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({questions, users}, {id}) {
    const question = questions[id];
    const user = users[question.author];

    return {
        question,
        user,
    }
}

export default connect(mapStateToProps)(Question);
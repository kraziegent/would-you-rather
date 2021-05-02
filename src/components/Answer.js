import React, {Component} from 'react';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../actions/questions';
import Result from './Result';
import Vote from './Vote';

class Answer extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        //Handle submit
        const answer = e.target.answer.value;
        const {dispatch, id} = this.props;

        dispatch(handleAddAnswer(id, answer));
    }

    render() {
        const {question, user, authedUser} = this.props;
        const answered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);

        return (
            <div className='box'>
                <div className='box-header'>{answered ? `Asked by ${user.name}` : `${user.name} asks:`}</div>
                <div className='box-body'>
                    <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="avatar" />
                    {answered
                        ? <Result question={question} authedUser={authedUser} />
                        : <Vote question={question} handleSubmit={this.handleSubmit} />
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, props) {
    const {question_id} = props.match.params;
    const question = questions[question_id];
    const user = users[question.author];

    return {
        id: question_id,
        question,
        user,
        authedUser,
    }
}

export default connect(mapStateToProps)(Answer);
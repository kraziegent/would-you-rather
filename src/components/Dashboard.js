import React, {Component} from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import {hasAnswered} from '../utils/helpers'

class Dashboard extends Component {
    state = {
        clicked: 'unanswered',
    }

    handleClick = (e) => {
        e.preventDefault();
        const clicked = e.target.name;

        this.setState({
            clicked
        });
    }

    render () {
        const {unAnswered, answered} = this.props;
        const {clicked} = this.state;
        const questions = clicked === 'unanswered' ? unAnswered : answered;

        return (
            <div className='box'>
                <div className='tab center'>
                    <button className={`tablinks ${clicked === 'unanswered' ? 'active': ''}`} name='unanswered' onClick={this.handleClick}>Unanswered Questions</button>
                    <button className={`tablinks ${clicked === 'answered' ? 'active': ''}`} name='answered' onClick={this.handleClick}>Answered Questions</button>
                </div>
                <div className='tabcontent'>
                    {questions.map((id) => (
                        <Question key={id} id={id} />
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser}) {

    const unAnswered = Object.keys(questions)
                        .filter((key) => !hasAnswered(questions[key], authedUser))
                        .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    const answered = Object.keys(questions)
                        .filter((key) => hasAnswered(questions[key], authedUser))
                        .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

    return {
        unAnswered,
        answered,
    }
}

export default connect(mapStateToProps)(Dashboard);
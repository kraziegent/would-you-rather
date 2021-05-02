import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

function Dashboard(props) {
    const {unAnswered, answered} = props;

    return (
        <div className=''>
            {unAnswered.map((id) => (
                <Question key={id} id={id} />
            ))}
        </div>
    )
}

function mapStateToProps({questions, authedUser}) {

    const unAnswered = Object.keys(questions)
                        .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    const answered = Object.keys(questions)
                        .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

    return {
        unAnswered,
        answered,
    }
}

export default connect(mapStateToProps)(Dashboard);
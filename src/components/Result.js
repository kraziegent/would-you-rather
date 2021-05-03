import React from 'react';

export default function Result (props) {
    const {question, authedUser} = props;
    const {optionOne, optionTwo} = question;
    const total = optionOne.votes.length + optionTwo.votes.length;
    const onePercent = Math.round((optionOne.votes.length * 100)/total);
    const twoPercent = Math.round((optionTwo.votes.length * 100)/total);
    
    return (
        <div className='box-info'>
            <h2>Result:</h2>

            <div className={`box-inner ${optionOne.votes.includes(authedUser) ? 'answer' : ''}`}>
                {optionOne.votes.includes(authedUser) && <div className='topRightFixed center'>Your Vote</div>}
                
                <p>{`Would you rather ${optionOne.text}?`}</p>
                <div className='percent'>
                    <div className='percent-load' style={{width: `${onePercent}%`}}>
                        {onePercent}%
                    </div>
                </div>
                <p className='center'>{`${optionOne.votes.length} out of ${total} vote(s)`}</p>
            </div>

            <div className={`box-inner ${optionTwo.votes.includes(authedUser) ? 'answer' : ''}`}>
                {optionTwo.votes.includes(authedUser) && <div className='topRightFixed center'>Your Vote</div>}

                <p>{`Would you rather ${optionTwo.text}?`}</p>
                <div className='percent'>
                    <div className='percent-load' style={{width: `${twoPercent}%`}}>
                        {twoPercent}%
                    </div>
                </div>
                <p className='center'>{`${optionTwo.votes.length} out of ${total} vote(s)`}</p>
            </div>
        </div>
    )
}
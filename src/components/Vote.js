import React, {Component} from 'react';

class Vote extends Component {

    state = {
        answer: 'optionOne'
    }

    handleChange = (e) => {
        this.setState({
          answer: e.target.value
        })
    }

    render () {
        const {question, handleSubmit} = this.props;
        const {answer} = this.state;

        return (
            <div className='box-info'>
                <h2>Would You Rather ...</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label className='radio'>{question.optionOne.text}
                        <input type='radio' name='answer' value='optionOne' checked={answer==='optionOne'} onChange={this.handleChange} />
                        <span className='radio-check'></span>
                    </label>

                    <label className='radio'>{question.optionTwo.text}
                        <input type='radio' name='answer' value='optionTwo' checked={answer==='optionTwo'} onChange={this.handleChange} />
                        <span className='radio-check'></span>
                    </label>

                    <button className='btn' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default Vote;
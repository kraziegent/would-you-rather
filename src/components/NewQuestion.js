import React, {Component} from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router';

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }

    handleChange = (e) => {
        const name = e.target.name;
        const text = e.target.value;

        this.setState({
            [name]: text,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {optionOneText, optionTwoText} = this.state;
        const {dispatch} = this.props;

        dispatch(handleAddQuestion(optionOneText, optionTwoText));

        this.setState({
            optionOneText: '', 
            optionTwoText: '',
            toHome: true,
        });
    }

    render() {
        const {optionOneText, optionTwoText, toHome} = this.state;

        if(toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div className='box'>
                <div className="box-header center">Create New Question</div>
                <div className='box-body'>
                    <div className='box-info box-form'>
                        <h5>Complete the question:</h5>
                        <h2>Would you rather ...</h2>
                        <form className="new-question" onSubmit={this.handleSubmit}>
                            <input 
                                placeholder="Enter Option One Text Here"
                                className='input'
                                name='optionOneText'
                                value={optionOneText}
                                onChange={this.handleChange}
                                required
                            />
                            <div className='center or'>
                                OR
                            </div>
                            <input 
                                placeholder="Enter Option Two Text Here"
                                className='input'
                                name='optionTwoText'
                                value={optionTwoText}
                                onChange={this.handleChange}
                                required
                            />

                            <button className="btn" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion);
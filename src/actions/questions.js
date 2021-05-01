import {saveAnswer, saveQuestion} from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';
import { addUserAnswer, addUserQuestion } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addUserQuestion(question.id, question.author));
        })
        .then(() => dispatch(hideLoading()))
    }
}

function addAnswer(qid, user, answer) {
    return {
        type: ADD_ANSWER,
        qid,
        answer,
        user,
    }
}

export function handleAddAnswer(id, answer) {
    return (dispatch, getState) => {
        const {authedUser} = getState()

        dispatch(showLoading())

        return saveAnswer({
            qid: id,
            answer,
            authedUser,
        })
        .then(() => {
            dispatch(addAnswer(id, authedUser, answer));
            dispatch(addUserAnswer(id, authedUser, answer));
        })
        .then(() => dispatch(hideLoading()))
    }
}
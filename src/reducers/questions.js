import {ADD_ANSWER, ADD_QUESTION, RECEIVE_QUESTIONS} from '../actions/questions';

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {

            }
        case ADD_ANSWER:
            return {

            }
        default:
            return state;
    }
}
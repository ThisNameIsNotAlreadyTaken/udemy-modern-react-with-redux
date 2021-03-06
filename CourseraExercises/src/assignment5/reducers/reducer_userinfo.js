import { SAVE_USER_INFO } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case SAVE_USER_INFO:  
            return action.payload;
        default:
            return state;
    }
}
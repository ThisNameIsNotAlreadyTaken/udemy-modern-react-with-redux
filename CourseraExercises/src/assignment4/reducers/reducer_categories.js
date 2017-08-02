import { GET_ALL_CATEGORIES } from '../actions';
import _ from 'lodash';

export default function(state = [], action) {
    switch(action.type) {
        case GET_ALL_CATEGORIES:       
            return action.payload.data;
        default:
            return state;
    }
}
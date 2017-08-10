import { GET_ALL_ITEMS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ALL_ITEMS: 
            return _.mapKeys(action.payload, "short_name");   
        default:
            return state;
    }
}
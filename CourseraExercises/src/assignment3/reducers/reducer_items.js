import { FIND_ITEMS, DELETE_ITEM } from '../actions';
import _ from 'lodash';

export default function(state = [], action) {
    switch(action.type) {
        case FIND_ITEMS:       
            return action.payload.data;
        case  DELETE_ITEM:  
            return _.filter(state, (item) => item.id !== action.payload.data.id);
        default:
            return state;
    }
}
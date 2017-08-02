import { GET_ITEMS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
        case GET_ITEMS:     
            let data = action.payload.data;
            if (data.category && data.menu_items) {
                return {...state, [data.category.short_name]: { category: data.category, items: data.menu_items}};
            } else {
                return state;
            }
        default:
            return state;
    }
}
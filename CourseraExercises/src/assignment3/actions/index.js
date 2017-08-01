import axios from 'axios';
import _ from 'lodash';

export const FIND_ITEMS = 'FIND_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';

const ROOT_URL = 'https://davids-restaurant.herokuapp.com/menu_items.json';

export function getItems(term, callback) {
    let request;

    if (!term || !term.length) {
        request = {
            data: []
        };
        callback();
    } else {
        request = axios.get(ROOT_URL).then((response) => { 
            response.data = _.filter(response.data.menu_items, (item) => item.description.toLowerCase().indexOf(term) !== -1);
            callback();
            return response;
        });
    }

    return {
        type: FIND_ITEMS,
        payload: request
    };
}

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: {
            data: {
                id: id
            }
        }     
    };
}
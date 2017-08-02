import axios from 'axios';
import _ from 'lodash';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_ITEMS = 'GET_ITEMS';

const ROOT_URL = 'https://davids-restaurant.herokuapp.com';

export function getAllCategories() {
    const request = axios.get(`${ROOT_URL}/categories.json`);

    return {
        type: GET_ALL_CATEGORIES,
        payload: request
    };
}

export function getItems(categoryShortName) {
    const request = axios.get(`${ROOT_URL}/menu_items.json`, { params: {
        category: categoryShortName
    }});

    return {
        type: GET_ITEMS,
        payload: request
    };
}
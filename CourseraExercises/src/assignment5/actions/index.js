import axios from 'axios';

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';

const ROOT_URL = 'https://davids-restaurant.herokuapp.com';

export function getAllItems() {
    const request = axios.get(`${ROOT_URL}/menu_items.json`).then(response => {return response.data.menu_items;});

    return {
        type: GET_ALL_ITEMS,
        payload: request
    };
}

export function saveUserInfo(userInfo) {
    return {
        type: SAVE_USER_INFO,
        payload: userInfo
    };
}
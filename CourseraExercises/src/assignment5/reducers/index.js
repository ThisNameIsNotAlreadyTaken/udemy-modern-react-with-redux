import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import UserInfoReducer from './reducer_userinfo';
import ItemsReducer from './reducer_items';

const rootReducer = combineReducers({
    form: formReducer,
    items: ItemsReducer,
    userinfo: UserInfoReducer
});

export default rootReducer;
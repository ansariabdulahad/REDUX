import userData from '../../Json-api/data.json';
import { FILTER_BY_EMAIL, FILTER_BY_MOBILE, GET_ALL_USER } from '../State/user.state';

const defaultState = {
    data: []
}

let filtered = "";
let keyword = "";

const userReducer = (state = defaultState, action) => {
    if (action.type === GET_ALL_USER) {
        return {
            ...state,
            data: userData
        }
    }

    if (action.type === FILTER_BY_EMAIL) {
        keyword = action.keyword;
        filtered = userData.filter(item => item.email.indexOf(keyword) !== -1);

        return {
            ...state,
            data: filtered
        }
    }

    if (action.type === FILTER_BY_MOBILE) {
        keyword = action.keyword;
        filtered = userData.filter(item => item.mobile.toString().indexOf(keyword) !== -1);

        return {
            ...state,
            data: filtered
        }
    }
}

export default userReducer;
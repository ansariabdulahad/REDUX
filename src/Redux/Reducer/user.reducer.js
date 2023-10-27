import userData from '../../Json-api/data.json';
import { ERROR, FILTER_BY_EMAIL, FILTER_BY_MOBILE, GET_ALL_USER, LOADER } from '../State/user.state';

const defaultState = {
    data: [],
    error: null,
    isLoading: false
}

let filtered = "";
let keyword = "";

const userReducer = (state = defaultState, action) => {
    if (action.type === GET_ALL_USER) {
        return {
            ...state,
            data: action.payload,
            isLoading: false
        }
    }

    if (action.type === FILTER_BY_EMAIL) {
        keyword = action.keyword;
        filtered = action.payload.filter(item => item.email.indexOf(keyword) !== -1);

        return {
            ...state,
            data: filtered
        }
    }

    if (action.type === FILTER_BY_MOBILE) {
        keyword = action.keyword;
        filtered = action.payload.filter(item => item.mobile.toString().indexOf(keyword) !== -1);

        return {
            ...state,
            data: filtered
        }
    }

    if (action.type === ERROR) {
        return {
            ...state,
            error: action.error
        }
    }

    if (action.type === LOADER) {
        return {
            ...state,
            isLoading: true
        }
    }
}

export default userReducer;
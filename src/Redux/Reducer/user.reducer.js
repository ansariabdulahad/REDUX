import data from '../../Json-api/data.json';
import { GET_ALL_USER } from '../State/user.state';

const defaultState = {
    data: []
}

const userReducer = (state = defaultState, action) => {
    if (action.type === GET_ALL_USER) {
        return {
            ...state,
            data: data
        }
    }
}

export default userReducer;
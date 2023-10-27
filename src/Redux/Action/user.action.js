import axios from "axios"
import { ERROR, GET_ALL_USER, LOADER } from "../State/user.state"

const userAction = () => {
    return {
        type: "Testing"
    }
}

axios.defaults.baseURL = 'http://localhost:3030';

let payload = [];

const getAllUser = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: LOADER
            })
            const { data } = await axios({
                method: "GET",
                url: '/dummy'
            });

            payload = data

            dispatch({
                type: GET_ALL_USER,
                payload: payload
            })

        } catch (error) {
            dispatch({
                type: ERROR,
                error: error
            })
        }
    }
}

const filter = (selectTag, e) => {
    const keyword = e.target.value;
    const state = selectTag.current.value;
    return {
        type: state,
        keyword: keyword,
        payload: payload
    }
}

export {
    userAction,
    getAllUser,
    filter
};
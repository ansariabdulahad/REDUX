import { GET_ALL_USER } from "../State/user.state"

const userAction = () => {
    return {
        type: "Testing"
    }
}

const getAllUser = () => {
    return {
        type: GET_ALL_USER
    }
}

const filter = (selectTag, e) => {
    const keyword = e.target.value;
    const state = selectTag.current.value;
    return {
        type: state,
        keyword: keyword
    }
}

export {
    userAction,
    getAllUser,
    filter
};
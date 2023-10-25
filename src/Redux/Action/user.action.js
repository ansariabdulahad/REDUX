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

export {
    userAction,
    getAllUser
};
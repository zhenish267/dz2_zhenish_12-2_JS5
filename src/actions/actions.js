import {types} from "../types";

export const sayHelloAction = (title) => {
    return{
        type: types.SAY_HELLO,
        payload: title
    }
}
export const clearSayHelloAction = () => {
    return{
        type: types.CLEAR_HELLO
    }
}

export const createUserAction = (user) => {
    return{
        type: types.CREATE_USER,
        payload: user
    }
}
export const addNameAction = (name) => {
    return{
        type: types.ADD_NAME,
        payload: name
    }
}
export const clearNameAction = (name) => {
    return{
        type: types.CLEAR_NAME,
        payload: name
    }
}
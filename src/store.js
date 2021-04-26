import { createStore } from "redux"

let initialState = {
    name: "empty",
    email:"empty",
    password:"empty",
}

function reducer(state, {type, payload}) {
    switch(type){
        case "UPDATE_DATA":
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                password: payload.password,
            }
        default:
            return {
                ...state
            }
    }
}

const store = createStore(reducer, initialState);

export default store;
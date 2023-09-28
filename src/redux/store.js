import { Reducer } from "react";
import { createStore } from "redux";


const initialState = {
    count: 0
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        default:
            return state
    }
}
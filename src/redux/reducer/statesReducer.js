import { UPDATESTATE } from "../type/states"

const initialState = {
    show: false
}

export const statesReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATESTATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
import { UPDATESTATE } from "../type/states";


export function updateState(state) {
    return {
        type: UPDATESTATE,
        payload: state
    }
}

export const login = () => {
    console.log('sd');
    // dispatch(updateState({isLoading: !isLoading}))
}
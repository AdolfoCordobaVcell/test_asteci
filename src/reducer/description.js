import {types} from '../types/types';

const initialState = {
    event: [],
}

export const description = (state = initialState, action) => {
    switch (action.type) {
        case types.open:
            return {
                ...state,
                event: action.payload
            }

        default: 
            return state;
    }
}
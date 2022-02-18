import {types} from '../types/types';

const initialState = {
    event: [],
}

export const start = (state = initialState, action) => {
    switch (action.type) {
        case types.start:
            return {
                ...state,
                event: action.payload
            }

        default: 
            return state;
    }
}
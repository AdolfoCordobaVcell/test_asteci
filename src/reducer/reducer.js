import {types} from '../types/types';

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case types.start:
            return {

            }

        default: 
            return state;
    }
}
import { Fetch } from '../helper/fetch';
import { types } from '../types/types';

export const actionOpen = ( id ) => {
    let data;

    return async (dispatch) => {
        try {
            const resp = await Fetch(`?_id=${ id }`);

            const body =  await resp.json();

            data = body.results;

            dispatch( open(data) )
        } catch (error) {
            console.log(error);
        }
    }
}

export const open = (event) => ({
    type: types.open,
    payload: event
});
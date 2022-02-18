import { Fetch } from '../helper/fetch';
import { types } from '../types/types';

export const actionStart = ( one, two, setClima, setTotal ) => {
    let data;

    return async (dispatch) => {
        try {
            const resp = await Fetch('');

            const body =  await resp.json();

            data = body.results.slice(one, two);

            setTotal(body.results.length);

            setClima(data);

            dispatch( start(data) );
        } catch (error) {
            console.log(error);
        }
    }
}

const start = (event) => ({
    type: types.start,
    payload: event
});
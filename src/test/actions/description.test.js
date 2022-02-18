import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actionOpen } from '../../actions/description';
import { types } from '../../types/types';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState= {

}

let store = mockStore( initState );

describe('Pruebas de las acciones de Description', () => {
    beforeEach(() => {
        store = mockStore( initState );
        jest.clearAllMocks();
    });

    test('actionOpen debe de ser correcto', async () => {
        await store.dispatch( actionOpen('5952983359954a0adbf7ab09') );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.open,
            payload: [{
                _id: expect.any(String),
                cityid: expect.any(String),
                validdateutc: expect.any(String),
                winddirectioncardinal: expect.any(String),
                probabilityofprecip: expect.any(String),
                relativehumidity: expect.any(String),
                name: expect.any(String),
                "date-insert": expect.any(String),
                longitude: expect.any(String),
                state: expect.any(String),
                lastreporttime: expect.any(String),
                skydescriptionlong: expect.any(String),
                stateabbr: expect.any(String),
                tempc: expect.any(String),
                latitude: expect.any(String),
                iconcode: expect.any(String),
                windspeedkm: expect.any(String)
            }]
        });
    });

});
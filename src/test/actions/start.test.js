import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actionStart } from '../../actions/start';
import { types } from '../../types/types';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState= {

}

let store = mockStore( initState );

describe('Pruebas de las acciones de Start', () => {
    beforeEach(() => {
        store = mockStore( initState );
        jest.clearAllMocks();
    });

    test('actionOpen debe de ser correcto', async () => {
        await store.dispatch( actionStart(0, 10, jest.fn(), jest.fn()) );

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.start,
            payload: expect.any(Array)
        });
    });

});
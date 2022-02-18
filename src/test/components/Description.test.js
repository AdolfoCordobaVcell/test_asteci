import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import Description from '../../components/description';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState= {
    open: {
        event: []
    }
}

const store = mockStore( initState );

const wrapper = mount(
    <Provider store={store}>
        <Description />
    </Provider>
);

describe('Pruebas en <Description />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
});
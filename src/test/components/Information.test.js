import React from 'react';
import { mount } from "enzyme";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { actionStart } from '../../actions/start';
import { actionOpen } from '../../actions/description';
import Information from '../../components/Information';

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState= {
    
}

const store = mockStore( initState );

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <Information />
        </MemoryRouter>
    </Provider>
);

jest.mock('../../actions/start', () => ({
    actionStart: jest.fn()
}));

jest.mock('../../actions/description', () => ({
    actionOpen: jest.fn()
}));

describe('Pruebas en <Information />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de disparar el actionStart', () => {
        wrapper.find('.buttons__btn--sig').simulate('click');

        expect( actionStart ).toHaveBeenLastCalledWith( 10, 20, expect.any(Function), expect.any(Function) );
    });

//     test('Debe de disparar el actionOpen', () => {
//         wrapper.find('.table__tr').at(1).props().onClick();

//         expect( actionOpen ).toHaveBeenLastCalledWith( expect.any(String) );
//     });
});
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { actionStart } from '../actions/start';
import { actionOpen } from '../actions/description';

const Information = () => {
    const [total, setTotal] = useState(0);
    const [clima, setClima] = useState([]);
    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(10);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch( actionStart( one, two, setClima, setTotal ) );
    }, [one, two, setClima, setTotal, dispatch]);

    const description = ( id ) => {
        navigate("/description");

        dispatch(actionOpen(id));
    }

    const anterior = () => {
        let counOne = one;
        let counTwo = two;
        
        counOne -= 10;
        counTwo -= 10;

        setOne(counOne);
        setTwo(counTwo);
    }

    const siguiente = () => {
        let counOne = one;
        let counTwo = two;
        
        counOne += 10;
        counTwo += 10;

        setOne(counOne);
        setTwo(counTwo);
    }

    return (
        <div>
            <table className="table">
                <thead className='table__thead'>
                    <tr>
                        <th className='table__th'>_id</th>
                        <th className='table__th'>city id</th>
                        <th className='table__th'>name</th>
                        <th className='table__th'>state</th>
                        <th className='table__th'>probability of precipt</th>
                        <th className='table__th'>relative humidity</th>
                        <th className='table__th'>lastre porttime</th>
                        <th className='table__th'>probability of precip</th>
                    </tr>
                </thead>

                <tbody className="table__tbody">
                    
                        {
                            clima.map(({_id, cityid, name, state, probabilityofprecip, relativehumidity, lastreporttime}) => (
                                <tr key={_id} className="table__tr" onClick={ () => description(_id) }>
                                    <td className="table__td">
                                    {_id}
                                    </td>

                                    <td className="table__td">
                                    {cityid}
                                    </td>

                                    <td className="table__td">
                                    {name}
                                    </td>

                                    <td className="table__td">
                                    {state}
                                    </td>

                                    <td className="table__td">
                                    {probabilityofprecip}
                                    </td>

                                    <td className="table__td">
                                    {relativehumidity}
                                    </td>

                                    <td className="table__td">
                                    {lastreporttime}
                                    </td>

                                    <td className="table__td">
                                    {(probabilityofprecip > 60 || relativehumidity > 50)
                                        ? 'yes' : 'No'}
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>

            <div className='buttons'>
                <button className='buttons__btn' onClick={ anterior } disabled={ one===0 && true}>Anterior</button>
                <button className='buttons__btn buttons__btn--sig' onClick={ siguiente } disabled={ two===100 && true}>Siguiente</button>
            </div>

            <div className='total'>
                <p>Total de registros {total} </p>
                <p>del {one + 1} al {two}</p>
            </div>
        </div>
    );
};

export default Information;
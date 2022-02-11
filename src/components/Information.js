import React, { useEffect, useState } from 'react';

const Information = () => {
    const [clima, setClima] = useState([]);

    useEffect(() => {
        let data;
        fetch('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
            .then(res => {
                return res.json();
            })
            .then(res => {
                data = res.results.slice(0, 10);

                setClima(data);
            });
    }, []);


    return (
        <div>
            <table className="tabla">
                <tbody>
                    <tr>
                        <th>_id</th>
                        <th>city id</th>
                        <th>name</th>
                        <th>state</th>
                        <th>probability of precipt</th>
                        <th>relative humidity</th>
                        <th>lastre porttime</th>
                        <th>probability of precip</th>
                    </tr>
                        {
                            clima.map(({_id, cityid, name, state, probabilityofprecip, relativehumidity, lastreporttime}) => (
                                <tr key={_id}>
                                    <th>
                                    {_id}
                                    </th>

                                    <th>
                                    {cityid}
                                    </th>

                                    <th>
                                    {name}
                                    </th>

                                    <th>
                                    {state}
                                    </th>

                                    <th>
                                    {probabilityofprecip}
                                    </th>

                                    <th>
                                    {relativehumidity}
                                    </th>

                                    <th>
                                    {lastreporttime}
                                    </th>

                                    <th>
                                    {(probabilityofprecip > 60 || relativehumidity > 50)
                                        ? 'yes' : 'No'}
                                    </th>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    );
};

export default Information;
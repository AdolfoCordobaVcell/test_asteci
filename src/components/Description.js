import React from 'react';
import { useSelector } from 'react-redux';

const Description = () => {
    const { event } = useSelector(state => state.open);

    return (
        <div>
            {
                event.map(({ _id, cityid, "date-insert": date, iconcode, lastreporttime, latitude, longitude, name, probabilityofprecip,
                            relativehumidity, skydescriptionlong, state, stateabbr, tempc, validdateutc, winddirectioncardinal,
                            windspeedkm }) => (
                    <div className='description'>
                        <div className='description__grid'>
                            <h2 className='description__target'>Id</h2>
                            <p className='description__text'>{ _id }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>City Id</h2>
                            <p className='description__text'>{ cityid }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Date Insert</h2>
                            <p className='description__text'>{ date }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Icon Code</h2>
                            <p className='description__text'>{ iconcode }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Lastre Port Time</h2>
                            <p className='description__text'>{ lastreporttime }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Latitude</h2>
                            <p className='description__text'>{ latitude }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Longitude</h2>
                            <p className='description__text'>{ longitude }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Name</h2>
                            <p className='description__text'>{ name }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Probability of Precip</h2>
                            <p className='description__text'>{ probabilityofprecip }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Relative Humidity</h2>
                            <p className='description__text'>{ relativehumidity }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Sky Description Long</h2>
                            <p className='description__text'>{ skydescriptionlong }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>State</h2>
                            <p className='description__text'>{ state }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>State Abbr</h2>
                            <p className='description__text'>{ stateabbr }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Temp</h2>
                            <p className='description__text'>{ tempc }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Validdate Utc</h2>
                            <p className='description__text'>{ validdateutc }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Wind Direction Cardinal</h2>
                            <p className='description__text'>{ winddirectioncardinal }</p>
                        </div>

                        <div className='description__grid'>
                            <h2 className='description__target'>Wind Spped Km</h2>
                            <p className='description__text'>{ windspeedkm }</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Description;
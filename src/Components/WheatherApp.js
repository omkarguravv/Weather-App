import React, { useEffect, useState } from 'react';
import './WheatherApp.css';

const WheatherApp=() =>{

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `Your weather api key`

            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    }, [search])

    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input type="search" className='inputField'
                    value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    />
                </div>

                {!city ?
                    (<p className="errorMsg">No Data found</p>)
                    :
                    (
                        <div >

                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h2>

                                <h1 className="tempt">
                                    {city.temp} °cel
                                </h1>

                                <h3 className="tempmin_max">
                                  Min :  {city.temp_min} °cel  
                                  <br />
                                  Max :  {city.temp_max} °cel
                                </h3>
                            </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                        
                    )}



            </div>


        </>
    )
}

export default WheatherApp;

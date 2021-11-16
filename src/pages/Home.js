import React, {useEffect} from "react";
import NumberFormat from "react-number-format";
import {useDispatch, useSelector} from "react-redux";
import {loadGames, loadCountryDate} from "../actions/dateAction";


const styleCursor = {
    // 'margin-top': '15px',
    // 'margin-bottom': '15px',

    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'flex-direction': 'column',
    'height': '100vh',
    'background-color': 'hsla(50, 33%, 25%, 0.75)',
};


const Home = ()=> {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadGames())
    });
    const { world_population, countries_names, total_countries, country_date, loading} = useSelector(
        (state) => state.date
    );
    return (
        <div style={styleCursor}>
            <div>
                <h1>Total countries: {total_countries}</h1>
            </div>
           <div>
               <h1>World population: <NumberFormat value={+world_population} displayType={'text'} thousandSeparator={true} /></h1>
           </div>

            <div>
                <select onChange={(e) => dispatch(loadCountryDate(e.target.value))}>
                    <option value="">--Please choose a country--</option>
                    {countries_names.map((country, index) => (
                        <option value={country}>{index+1}. {country}</option>
                    ))}
                </select>
            </div>

            <div>
                {loading && (
                    <h1>{country_date.country_name}:  <NumberFormat value={+country_date.population} displayType={'text'} thousandSeparator={true} /></h1>
                )
                }
            </div>


        </div>
    );
}

export default Home;

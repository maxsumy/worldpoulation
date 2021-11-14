import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames, loadCountryDate} from "../actions/dateAction";
import axios from "axios";

// const country_population  = async (country) =>{
//     const options = {
//         method: 'GET',
//         url: 'https://world-population.p.rapidapi.com/population',
//         params: {country_name: `${country}`},
//         headers: {
//             'x-rapidapi-host': 'world-population.p.rapidapi.com',
//             'x-rapidapi-key': '8ff973bad1mshfac24ee6a73421dp1bb7a2jsn1f3041e8c532'
//         }
//     };
//
//     let country_pop;
//     await  axios.request(options).then(function (response) {
//         country_pop = response.data;
//     }).catch(function (error) {
//         console.error(error);
//     });
//
//     return country_pop.body.population;
//
// }

// const handleInputChange = (e) => {
//     const dispatch1 = useDispatch();
//     dispatch1(loadCountryDate(e.target.value));
//     console.log(e.target.value);
// };

const Home = ()=> {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadGames())
    });
    const { world_population, countries_names, total_countries, country_population, country_name} = useSelector(
        (state) => state.date
    );
    return (
        <div>
            <h1>Total countries: {total_countries}</h1>
            <h1>World population: {world_population}</h1>
            {/*{countries_names.map((country, index) => (*/}
            {/*    <h5>{index+1}. {country}</h5>*/}
            {/*))}*/}
            <select onChange={(e) => dispatch(loadCountryDate(e.target.value))}>
                <option value="">--Please choose a country--</option>
                {countries_names.map((country, index) => (
                    <option value={country}>{index+1}. {country}</option>
                ))}
            </select>
            <h1>{country_name}: {country_population}</h1>

        </div>
    );
}

export default Home;

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/dateAction";

const Home = ()=> {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadGames())
    });
    const { world_population, countries_names,  total_countries } = useSelector(
        (state) => state.date
    );
    return (
        <div>
            <h1>Total countries: {total_countries}</h1>
            <h1>World population: {world_population}</h1>
            {countries_names.map((country, index) => (
                <h5>{index+1}. {country}</h5>
            ))}
        </div>
    );
}

export default Home;

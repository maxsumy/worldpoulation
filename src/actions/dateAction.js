import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://world-population.p.rapidapi.com/allcountriesname',
    headers: {
        'x-rapidapi-host': 'world-population.p.rapidapi.com',
        'x-rapidapi-key': '8ff973bad1mshfac24ee6a73421dp1bb7a2jsn1f3041e8c532'
    }
};

const options2 = {
    method: 'GET',
    url: 'https://world-population.p.rapidapi.com/worldpopulation',
    headers: {
        'x-rapidapi-host': 'world-population.p.rapidapi.com',
        'x-rapidapi-key': '8ff973bad1mshfac24ee6a73421dp1bb7a2jsn1f3041e8c532'
    }
};



export const loadGames = () => async (dispatch) => {

    let countriesNamesData;
    let worldPopulationData;

    await  axios.request(options).then(function (response) {
        countriesNamesData = response.data;
    }).catch(function (error) {
        console.error(error);
    });

    await  axios.request(options2).then(function (response) {
        worldPopulationData = response.data;
    }).catch(function (error) {
        console.error(error);
    });


    dispatch({
        type: "FETCH_COUNTRIES_NAMES",
        payload: {
            countries_names: countriesNamesData.body.countries,
            world_population:  worldPopulationData.body.world_population,
            total_countries: worldPopulationData.body.total_countries
        },
    });
};

export const loadCountryDate = (country) => async (dispatch) => {

    const options3 = {
        method: 'GET',
        url: 'https://world-population.p.rapidapi.com/population',
        params: {country_name: country},
        headers: {
            'x-rapidapi-host': 'world-population.p.rapidapi.com',
            'x-rapidapi-key': '8ff973bad1mshfac24ee6a73421dp1bb7a2jsn1f3041e8c532'
        }
    };

    let countryDate;
    await  axios.request(options3).then(function (response) {
        countryDate = response.data;

    }).catch(function (error) {
        console.error(error);
    });


    dispatch({
        type: "FETCH_COUNTRY_DATE",
        payload: {
            country_date: countryDate.body,
            loading: true,
        },

    });
};


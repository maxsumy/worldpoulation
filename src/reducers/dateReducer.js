const initState = {
    countries_names: [],
    total_countries: [],
    world_population: [],
    country_name: [],
    country_population: []
};

const dateReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_COUNTRIES_NAMES":
            return {
                ...state,
                countries_names: action.payload.countries_names,
                world_population: action.payload.world_population,
                total_countries: action.payload.total_countries,

            };
        case "FETCH_COUNTRY_DATE":
            return {
                ...state,
                country_population: action.payload.population,
                country_name: action.payload.country_name,
            };

        default:
            return { ...state };
    }
};

export default dateReducer;

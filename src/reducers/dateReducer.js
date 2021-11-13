const initState = {
    countries_names: [],
    total_countries: [],
    world_population: [],
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
        case "FETCH_WORLD_POPULATION":
            return {
                ...state,
                world_population: action.payload.world_population,
            };
        case "FETCH_COUNTRY_POPULATION":
            return {
                ...state,
                country_population: action.payload.country_population,
            };
        default:
            return { ...state };
    }
};

export default dateReducer;

import axios from 'axios';

// const API_URL = 'https://nationnode.vercel.app/api/countries';
const API_URL = 'https://countries-api-abhishek.vercel.app/countries/Afghanistan';

export const fetchCountries = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

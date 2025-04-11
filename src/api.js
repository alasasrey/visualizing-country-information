import axios from 'axios';

// const API_URL = 'https://countries-api-abhishek.vercel.app/countries/Afghanistan';
const API_URL = 'https://countries-api-abhishek.vercel.app/countries/United States';

export const fetchCountries = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

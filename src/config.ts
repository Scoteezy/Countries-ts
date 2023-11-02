const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUTNRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name:string)=> BASE_URL + 'name/' + name;

export const filterByCode = (codes:string[])=> BASE_URL + 'alpha?codes=' + codes.join(',');

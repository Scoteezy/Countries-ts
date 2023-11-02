export interface Country{
    capital: string[];
    flags: Image;
    name: CountryName;
    population: number;
    region: string

}
export interface FullCountry extends Country {
        subregion: string,
        tld: string[],
        currencies: {
            [key:string]: {
                name: string;
                symbol: string;
            }
        },
        languages: { 
            [key:string]: string
        } | string,
        borders:string[]
}
export interface Image { 
    png: string,
    svg: string,
    alt?: string
}
export interface CountryName{
    common: string,
    official: string,
    nativeName:  {
        [key:string] : {
            common: string,
            official: string
        }
    }
}
export interface Info { 
    title: string;
    description: string | string[];
}
export interface Option{ 
    value: string;
    label: string
}
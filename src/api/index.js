import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const countryUrl = 'https://covid19.mathdro.id/api/countries';

export const fetchCovidData = async() => {
    try{
        const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
    
        return {confirmed, recovered, deaths, lastUpdate};
        
    }
    catch(error){
        return error;
    }
}

//fetch all country data
export const fetchCountry = async(countryName) => {

    try{

        if(countryName){
            const {data} = await axios.get(countryUrl + "/" + countryName);
            console.log(data);
            return data;
        }

        const {data:{countries}} = await axios.get(countryUrl);
        return countries;
    }
    catch(error){
        return error;
    }

}


import React from 'react';
import styles from  './ComponentCss/CountrySearch.module.css';

const CountrySearch = (props) => {
    return(
    <div className={styles.body}>
    <form >
    <select className={styles.search} onChange = {(e) => {props.onChangeCountry(e.target.value)}} >
    <option value="Global" >Global</option>

    if(props.covidCountries.length > 0 ){
     props.covidCountries.map( (countries , i) => <option value = {countries.name} key={i}> {countries.name}</option> )
    }
    </select>
    </form>
        </div>
    )
}

export default CountrySearch;
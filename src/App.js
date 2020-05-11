import React from 'react';
import CountrySearch from './Components/CountrySearch';
import Information from './Components/Information.js';
import './App.css';
import {fetchCovidData, fetchCountry} from './api'


class App extends React.Component{

    onChangeCountry = this.onChangeCountry.bind(this);

  state = {
    Data : {
      confirmed: '',
      recovered: '',
      deaths: '',
      lastUpdate:''
    },
    covidCountries : [],
    country : 'global'
  }

  async componentDidMount(){
     const covidCountries = await fetchCountry();

    const {confirmed, recovered, deaths, lastUpdate} =  await fetchCovidData();
   
    this.setState({
    Data : {
      confirmed : confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate: lastUpdate
    },
    
    //set the state of covidcountries
    covidCountries
    })
}

  async onChangeCountry (country) {
    console.log(country);
  if (country === "global") {
  
    const {confirmed, recovered, deaths, lastUpdate} =   fetchCovidData();
   
    this.setState({
    Data : {
      confirmed : confirmed.value,
      recovered: recovered.value,
      deaths: deaths.value,
      lastUpdate: lastUpdate
    }
  })
}

const {confirmed, recovered, deaths, lastUpdate} = await fetchCountry(country);

this.setState({
  Data : {
    confirmed : confirmed.value,
    recovered: recovered.value,
    deaths: deaths.value,
    lastUpdate: lastUpdate
  }, 
  country
})

}


  render(){

    return(
     
      <div className="App">
        <h1 className="title">C<span className="covid">O</span>VID19 TRACKER</h1>
      <CountrySearch covidCountries = {this.state.covidCountries} onChangeCountry = {this.onChangeCountry} />
      <Information data = {this.state.Data} />
      </div>
    )
  }
}

export default App;

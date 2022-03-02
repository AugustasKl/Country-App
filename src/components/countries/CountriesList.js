import React, { useState } from "react";
import classes from "./CountriesList.module.css";
import CountriesItem from "./CountriesItem";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CountriesFilter from "../folder/CountriesFilter";



const sortByName=(countries, ascending)=>{
  return countries.sort((countryA, countryB)=>{
    if(ascending){
      return countryA.name>countryB.name ? 1 : -1;
    }else{
      return countryA.name<countryB.name ? 1 : -1;
    }
  })
}

const CountriesList = (props) => {
  const [selection,setSelection]=useState('--')
  const history=useHistory()
  const location=useLocation()


  const countriesData=[...props.countries]
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending=queryParams.get('sort')==='asc'
  const sortedCountries=sortByName(countriesData, isSortingAscending)

 
  const changeSortHandler=()=>{
    history.push({
      pathname:location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    })
  }


  const filterChangeHandler=(selectedOption)=>{
    setSelection(selectedOption)
  }

const data= sortedCountries.filter(country=>{
  if (country.area<Number(selection)){
    return country
  }
  else if(country.region === selection){
    return country
  }
})


const modifiedData= selection == '--' ? sortedCountries: data 

console.log(modifiedData)


  return (
    <React.Fragment>
      <div className={classes.intro}>
        <h1>Countries List </h1>
        <div className={classes.buttons}>
        <button className={classes.order} onClick={changeSortHandler} >Sort by Name In {isSortingAscending ? 'Descending' : 'Ascending'} Order </button>
            <CountriesFilter selected={selection} onSelectedChoice={filterChangeHandler}/>
        </div>
      </div>
      <div className={classes.list}>
          <ul>
            {modifiedData.map((country)=>{
                return <CountriesItem
                id={country.id}
                key={country.id}
                name={country.name}
                region={country.region}
                area={country.area}
                />
            })}
          </ul>
      </div>
    </React.Fragment>
  );
};
export default CountriesList;

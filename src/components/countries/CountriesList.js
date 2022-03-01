import React from "react";
import classes from "./CountriesList.module.css";
import CountriesItem from "./CountriesItem";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


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


  return (
    <React.Fragment>
      <div className={classes.intro}>
        <h1>Countries List </h1>
        <button className={classes.order} onClick={changeSortHandler} >Sort by Name In {isSortingAscending ? 'Descending' : 'Ascending'} Order </button>
      </div>
      <div className={classes.list}>
          <ul>
            {sortedCountries.map((country)=>{
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

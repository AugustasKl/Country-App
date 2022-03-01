import React from "react";
import classes from "./CountriesList.module.css";
import CountriesItem from "./CountriesItem";
const CountriesList = (props) => {
    console.log(props.countries)
    // const countiesData=[...props.countries]
    // console.log(countiesData)
  return (
    <React.Fragment>
      <div className={classes.intro}>
        <h1>Countries List </h1>
        <button className={classes.order}>Sort By Name</button>
      </div>
      <div className={classes.list}>
          <ul>
            {props.countries.map((country)=>{
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

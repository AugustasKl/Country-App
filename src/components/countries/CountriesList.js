import React, { useState, useEffect } from "react";
import classes from "./CountriesList.module.css";
import CountriesItem from "./CountriesItem";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CountriesFilter from "../filter/CountriesFilter";
import Pagination from "../pagination/Pagination";
import { sortByName } from "../../helpers/helpers";

const CountriesList = (props) => {
  const [selection, setSelection] = useState("--");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const history = useHistory();
  const location = useLocation();

  //Sorting ascending/descending logic
  const countriesData = [...props.countries];
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") !== "desc";
  const sortedCountries = sortByName(countriesData, isSortingAscending);

  const changeSortHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };



  //Filter logic
  const filterChangeHandler = (selectedOption) => {
    setSelection(selectedOption);
  };

  
  const data = sortedCountries.filter((country) => {
    if (country.area < Number(selection)) {
      return country;
    } else if (country.region === selection) {
      return country;
    }
  });
  const filteredData = selection === "--" ? sortedCountries : data;



  //Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirsPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirsPost, indexOfLastPost);

  const paginateHandler = (pageNum) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
   
  }, [currentPosts])
  

  return (
    <React.Fragment>
      <div className={classes.intro}>
        <h1>Countries List </h1>
        <div className={classes.buttons}>
          <button className={classes.order} onClick={changeSortHandler}>
            Sort by Name In {isSortingAscending ? "Z-A" : "A-Z"} Order
          </button>
          <CountriesFilter
            selected={selection}
            onSelectedChoice={filterChangeHandler}
          />
        </div>
      </div>
      <div className={classes.list}>
        <ul>
          {currentPosts.map((country) => {
            return (
              <CountriesItem
                key={country.name}
                id={country.name}
                name={country.name}
                region={country.region}
                area={country.area}
              />
            );
          })}
        </ul>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredData.length}
          paginate={paginateHandler}
        />
      </div>
    </React.Fragment>
  );
};
export default CountriesList;

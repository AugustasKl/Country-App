import React, { useEffect, useState } from "react";
import classes from "./CountriesList.module.css";
import CountriesItem from "./CountriesItem";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CountriesFilter from "../folder/CountriesFilter";
import Pagination from "../pagination/Pagination";



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
  const [currentPage,setCurrentPage]= useState(1)
  const [postsPerPage, setPostsPerPage]=useState(20)
  const history=useHistory()
  const location=useLocation()
console.log(postsPerPage)

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


const indexOfLastPost= currentPage*postsPerPage
console.log(indexOfLastPost)
const indexOfFirsPost=indexOfLastPost - postsPerPage
console.log(indexOfFirsPost)
const currentPosts = modifiedData.slice(indexOfFirsPost, indexOfLastPost)
console.log(currentPosts)

// useEffect(()=>{
//   paginateHandler()
// },[paginateHandler])

const paginateHandler =(paginate)=>{
  // console.log(paginate)
setCurrentPage(paginate)
}

console.log(currentPage)
console.log(modifiedData.length)

const paginate=(pageNum)=>{
setCurrentPage(pageNum)
}

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
            {currentPosts.map((country)=>{
                return <CountriesItem
                key={country.name}
                id={country.name}
                name={country.name}
                region={country.region}
                area={country.area}
                />
            })}
          </ul>
          <Pagination postsPerPage={postsPerPage} totalPosts={modifiedData.length} paginate={paginate}/>
      </div>
    </React.Fragment>
  );
};
export default CountriesList;

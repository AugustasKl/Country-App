import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CountriesList from "../components/countries/CountriesList"
import { fetchCountries } from "../lib/api"
import LoadingSpinner from "../helpers/LoadingSpinner"


const AllCountries=()=>{
    const dispatch=useDispatch()
    const countriesData=useSelector((state)=>state.api.countries)
    const notifications=useSelector((state)=>state.ui.status)
    useEffect(()=>{
        dispatch(fetchCountries())
    },[dispatch])

    if (notifications === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
      }
      //error handler
      if(notifications === 'error'){
        return <p className='centered'style={{color:"green"}}>Unable to fetch data from server</p>
      }
    
    return(
        <React.Fragment>
            <CountriesList countries={countriesData}/>
        </React.Fragment>
    )
}

export default AllCountries
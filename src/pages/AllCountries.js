import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CountriesList from "../components/countries/CountriesList"
import { fetchCountries } from "../lib/api"



const AllCountries=()=>{
    const dispatch=useDispatch()
    const countriesData=useSelector((state)=>state.api.countries)
    
    useEffect(()=>{
        dispatch(fetchCountries())
    },[dispatch])

    return(
        <React.Fragment>
            <CountriesList countries={countriesData}/>
        </React.Fragment>
    )
}

export default AllCountries
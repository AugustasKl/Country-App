import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CountriesList from "../components/countries/CountriesList"
import { fetchCountries, fetchCountriesData } from "../lib/api"

const DUMMY_COUNTRIES=[
    {
        id:'c1',
        name:'Lithuania',
        region:'europe',
        area:65300
    },
    {
        id:'c2',
        name:'Lithuania',
        region:'europe',
        area:65300
    },
    {
        id:'c3',
        name:'Lithuania',
        region:'europe',
        area:65300
    },  {
        id:'c4',
        name:'Lithuania',
        region:'europe',
        area:65300
    }
]


const AllCountries=()=>{
    const dispatch=useDispatch()
    const countriesData=useSelector((state)=>state.api.countries)
    console.log(countriesData)
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
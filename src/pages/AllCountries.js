import React from "react"
import CountriesList from "../components/countries/CountriesList"

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
    return(
        <React.Fragment>
            <CountriesList countries={DUMMY_COUNTRIES}/>
        </React.Fragment>
    )
}

export default AllCountries
import { useEffect } from 'react'
import classes from './Pagination.module.css'

const Pagination =({postsPerPage, totalPosts, paginate})=>{
    const pageNumbers=[]

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i)
    }
    console.log(pageNumbers)


    const paginateHandler=(event)=>{
   
        console.log(event.target.value)
    //    onPaginatedData(data)
    }

    return(
        <nav>
        <ul className={classes.pagination}>
             {pageNumbers.map((number, i)=>{
                return <li
                id={number}
                key={number} 
                className={classes.number}>
               <a href={number} onClick={(ev)=> `${ev.preventDefault(), paginate(number)}`} className={classes.page}>
                    {number}
                </a>
                </li>
              
           
            })}
        </ul>
        </nav>
    )
}

export default Pagination
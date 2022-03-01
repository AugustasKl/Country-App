import { apiActions } from "../redux/api-slice"

const API="https://restcountries.com/v2/all?fields=name,region,area"

// export const fetchCountriesData=()=>{
//     return async (dispatch)=>{
//         const fetchCountry=async()=>{
//             const response =await fetch(API)
//             if(!response.ok){
//                 throw new Error("Could not fetch countries data")
//             }
//             const data=await response.json()
//             console.log(data)

//             return data
//         }
//         try{
//             const countriesData= await fetchCountry()
//             console.log(countriesData)
//             dispatch(
//                 apiActions.loadCountries({
//                     countries: countriesData
//                 })
//             )
//         }catch(err){
//             alert(err.message)
//         }
//     }
// }

export const fetchCountries = () => {
    return async (dispatch) => {
      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            response.json().then(() => {
              throw new Error(`Fetching countries data failed`);
            });
          }
        })
        .then((data) => {
          console.log(data);
                  dispatch(
                    apiActions.loadCountries({
                        countries: data
                      })
                      );
                  })
        .catch((err) => {
          console.error(err);
        });
    };
  };
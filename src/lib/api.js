import { apiActions } from "../redux/api-slice"

const API="https://restcountries.com/v2/all?fields=name,region,area"


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
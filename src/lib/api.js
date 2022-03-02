import { apiActions } from "../redux/api-slice";
import { uiActions } from "../redux/ui-slice";

const API = "https://restcountries.com/v2/all?fields=name,region,area";

export const fetchCountries = () => {
  return async (dispatch) => {
     //sending notification to UI
    dispatch(
      uiActions.pendingNotification({
        status: "pending",
      })
    );
    //FETCH api
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
        //getting and setting data
        dispatch(
          apiActions.loadCountries({
            countries: data,
          })
        );
        //sending notification to UI
        dispatch(
          uiActions.successNotification({
            status: "success",
          })
        );
      })
      .catch((err) => {
        console.error(err);
         //sending notification to UI
        dispatch(
          uiActions.errorNotification({
            status: "error",
          })
        );
      });
  };
};

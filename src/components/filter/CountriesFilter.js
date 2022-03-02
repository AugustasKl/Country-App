import classes from "./CountriesFilter.module.css";

const CountriesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    const selectedOption = event.target.value;
    props.onSelectedChoice(selectedOption);
  };

  return (
    <div className={classes.countries}>
      <div className={classes.control}>
        <label>Filter Countries by:</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option>--</option>
          <option value={65300}>
            Which are smaller than Lithuania by area
          </option>
          <option value={"Oceania"}>Which are in “Oceania” region </option>
        </select>
      </div>
    </div>
  );
};

export default CountriesFilter;

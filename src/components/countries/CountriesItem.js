import classes from "./CountriesItem.module.css";

const CountriesItem = (props) => {
  const { name, region, area } = props;
  console.log(area);
  return (
    <li className={classes.list}>
      <div className={classes.country}>
        <div className={classes.country}>{name}</div>
        <div className={classes.region}>{region}</div>
        <div className={classes.area}>{area}</div>
      </div>
    </li>
  );
};

export default CountriesItem;

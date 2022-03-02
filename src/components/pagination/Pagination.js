import classes from "./Pagination.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={classes.pagination}>
      {pageNumbers.map((number, i) => {
        return (
          <li id={number} key={number} className={classes.number}>
            <a
              href={number}
              onClick={(ev) => `${(ev.preventDefault(), paginate(number))}`}
              className={classes.active}
            >
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;

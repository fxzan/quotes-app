import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, descending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (descending) {
      return quoteA.id < quoteB.id ? 1 : -1;
    } else {
      return quoteA.id > quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  console.log(location);

  const queryParams = new URLSearchParams(location.search);

  const isDescending = queryParams.get("sort") === "desc";

  const sortedQuotes = sortQuotes(props.quotes, isDescending);

  function changeSortingHandler() {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isDescending ? "asc" : "desc"}`
    })
    // history.push(`${location.pathname}?sort=${isDescending ? "asc" : "desc"}`);
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isDescending ? "Ascending" : "Descending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;

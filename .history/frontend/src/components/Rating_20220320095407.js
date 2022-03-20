function Rating(props) {
  const { rating, numReviews } = props;
  return (
  <div className="rating">
      <span>
          <i className={
              rating
          }
      </span>
  </div>);
}

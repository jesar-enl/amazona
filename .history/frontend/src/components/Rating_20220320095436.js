function Rating(props) {
  const { rating, numReviews } = props;
  return (
  <div className="rating">
      <span>
          <i className={
              rating>=1 ? 'fas fa-star' : 
          }
      </span>
  </div>);
}

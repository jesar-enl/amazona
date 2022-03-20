function Rating(props) {
  const { rating, numReviews } = props;
  return (
  <div className="rating">
      <span>
          <i className={
              rating>=1 
              ? 'fas fa-star' 
              : rating >= 0.5 
              ? 'fas fa-star-half-alt' 
              : 'far fa-star'
          }
          />
      /span>
  </div>);
}

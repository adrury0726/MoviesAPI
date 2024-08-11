export default function Logo() {
  return (
    <div className="movie-app logo">
      <span role="img">🍿</span>
      <h1>Movie Ratings</h1>
      <p className="movie-app warning">
        This API Key is limited to 1000 requests per day.
      </p>
    </div>
  );
}

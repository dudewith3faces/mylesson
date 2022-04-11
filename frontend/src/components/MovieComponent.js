const defaultPoster = 'https://media.comicbook.com/files/img/default-movie.png';
export const MovieComponent = ({ title, director, plot, poster }) => {
  const image = poster !== 'N/A' ? poster : defaultPoster;
  return (
    <div
      role='article'
      className='d-flex img-card justify-content-start flex-wrap my-3'
    >
      <div className='image'>
        <img src={image} alt={title} />
      </div>
      <div className='side'>
        <h5>{title}</h5>
        <h6>Director: {director}</h6>
        <p className='text-wrap'>{plot}</p>
      </div>
    </div>
  );
};

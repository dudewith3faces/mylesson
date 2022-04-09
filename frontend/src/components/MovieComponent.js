const defaultPoster = 'https://media.comicbook.com/files/img/default-movie.png';
export const MovieComponent = ({ title, director, plot, poster }) => {
  const image = poster !== 'N/A' ? poster : defaultPoster;
  return (
    <div className='d-flex img-card justify-content-start flex-wrap my-3'>
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

  //   return (
  //     <div className='card-container box'>
  //       <div className='card-flip'>
  //         {/* Card Front */}
  //         <div className='card front'>
  //           <img
  //             src={image}
  //             className='card-img-top img-fluid'
  //             alt='movie-poster'
  //           />
  //           <div className='card-block'>
  //             <h5 className='card-title'>{title}</h5>
  //             {/* <p className='card-text'>some text here</p>
  //             <p className='card-text'>
  //               <small className='text-muted'>2011</small>
  //             </p> */}
  //           </div>
  //         </div>
  //         {/* End Card Front */}

  //         {/* Card Back  */}
  //         <div className='card back'>
  //           <div className='card-header warning-color'></div>
  //           <div className='card-block text-center'>
  //             <h4 className='card-title'>{director}</h4>
  //             <p className='card-text'>
  //               <span href='#' className='rating'>
  //                 {plot}
  //               </span>
  //             </p>
  //             <a href='#' className='btn orange'>
  //               Watch
  //             </a>
  //           </div>
  //           <img className='movie' src={image} alt='back-img' />
  //         </div>
  //         {/* End Card Back */}
  //       </div>
  //     </div>
  //   );
};

export const SeriesCard = ({curElem}) => {
    const {img_url,name,rating,description,cast,genre,watch_url} = curElem;
    return(
        <li className="card"> 
          <div>
             <img src={img_url} alt={name} width="40%" height="40%" />
          </div>
          <div className="card-content">
          <h2>Name: {name}</h2>
          <h3>Rating:{rating}</h3>
          <p style={{margin:"1.2rem 0"}}>
             Summary: {description}
          </p>
          <p>Genre:{genre.join(", ")}</p>
          <p>Cast: {cast.join(", ")}</p>
          <a href={watch_url} target="_blank">
          <button>Watch Now</button>
          </a>
          </div>
        </li>
    );
};
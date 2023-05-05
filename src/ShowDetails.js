import React from "react"
import { Link, useNavigate } from "react-router-dom";
import './index.css';

function ShowDetails({ data }) {

  const navigate = useNavigate();

  const handleNavigate = (item) =>{
    navigate(`/summary/${item.show.id}`,{
      state :item
    })
  }
  return (
    <div className='blog-details' >
      {data &&
        data.filter((detail) => detail.show.image !== null).map((detail) => (
          <div key={detail.show.id} onClick={()=>{handleNavigate(detail)}}>
            <h2>{detail.show.name}</h2>
              {detail.show.image && detail.show.image.medium && (
                <img src={detail.show.image.medium} alt={detail.show.name} />

              )}
              <p>Genre: {detail.show.genres.join(", ")}</p>
            <p>Language: {detail.show.language}</p>
            <p>Rating: {detail.show.rating.average}</p>
          </div>
        ))}
    </div>
  );
}

export default ShowDetails;

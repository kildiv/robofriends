import React from 'react';
import '../container/App.css';

const Card = ({ id, name, email }) => {

  return(
    <div className='card tc bg-light-green dib br3 pa3 ma2 grow'>
      <img className='robotsimg' src={`https://robohash.org/${id}?200x200`} alt='robot'></img>
        <div>
          <h3>{name}</h3>
          <p>{email}</p>
        </div>
    </div>
  );
}

export default Card;
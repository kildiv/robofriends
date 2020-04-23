import React from 'react';
import '../container/App.css';


const Scroll = (props) => {

  return (
    
    <div className='scroll mb5' style={{overflowY: 'scroll', border: '3px solid black', height: '450px'}}>
      {props.children}
    </div>
  );
}

export default Scroll;
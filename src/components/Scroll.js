import React from 'react'
//using an object with double curly brackets we can pass in styles
const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', height: '1000px'}}>
      {props.children}
    </div>
  )
};

export default Scroll

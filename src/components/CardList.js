import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  //for each item in robots.js that is imported into index.js and is accessed through
  //here through the render return, at the current element (named user) at index
  //(named i), assign a special key to each robot, and store their id, name and email
  const cardsArray = robots.map((user, i) => {
    //return, to cardsArray, the values of each robot assigned to the
    //different variables as per the Card.js file
    return (<Card
      key={i}
      id={robots[i].id}
      name={robots[i].name}
      email={robots[i].email}
    />);
  });

  //return the mapped array as defined above in a div
  return(
    <div>
      {cardsArray}
    </div>
  );
}

//export the CardList using default as this is the only item being returned
//from this javascript file to index.js
export default CardList;

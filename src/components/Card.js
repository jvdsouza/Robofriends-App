import React from 'react';
//This file generates the different robots using their id and obtains
//their name and email from robots.js, as this js file is passed into CardList
//which then utilises the Card class below.

const Card = ({name, email, id}) => { //not destructuring inside the input means we'd need to have something like robotprop passed in as the parameter
  //const {name, email, id} = robotprop; //so we dont have to use robotprop.id or robotprop.name or robotprop.email
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
      <div>
        <h2>{name}</h2> {/*have to use robotprop.name from the input of the class if we dont make the const at the top */}
        <p>{email}</p> {/*have to use robotprop.email from the input of the class if we dont make the const at the top */}
      </div>
    </div>
  )
}

export default Card;

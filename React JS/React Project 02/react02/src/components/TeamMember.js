import React from 'react';


function TeamMember(props){
    return(
    <div className='col-md-6'>
      <div className='card'>
        <div className='card-header'>
            <img
              style={{ maxWidth: '100%', borderRadius: '7px' }}
              src={props.info?.img}
            />
         
        </div>
        <div className='card-body'>
            <h2>{props.info?.name}</h2>
            <h5>{props.info?.position}</h5>
            <div>{props.info?.website}</div>
            <div>{props.info?.phone}</div>
            <div>{props.info?.email}</div>
        </div>
      </div>
    </div>
    )
}

/*
The question mark in <h5>{props.info?.position}</h5> 
is called Optional Chaining.
It is a new feature introduced in ECMAScript 2020
 that allows you to safely access properties of an
  object that may be undefined or null.

  Using optional chaining helps avoid 
  runtime errors caused by accessing properties
   of undefined or null objects, and it makes the
    code more concise and readable.
*/

export default TeamMember;
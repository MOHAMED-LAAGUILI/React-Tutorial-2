import React from 'react';



function SocialItem(socials){
    return (

        <li className='list-group-item'> 

        <img className='rounded-pill me-2' src={socials.img} alt={`Icon of ${socials.media}`}/>

        <input type="checkbox" id={socials.id}/>
        <label htmlFor={socials.id}> {socials.media}</label> 
        </li>
  
        );
   }

   export default SocialItem;
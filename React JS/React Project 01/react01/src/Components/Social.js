import React from 'react';
import SocialItem from './SocialItem';

function Social(){
    return (
        <ul className='list-group'>
        
        <SocialItem 
         media='Facebook'
         id='facebook'
         img='https://picsum.photos/50'
         />
{/* 
or use the as an object instead of properties

<SocialItem
p ={{
    media: 'Facebook',
    id: 'facebook',
    img: 'https://picsum.photos/60',
}}

then u have to call them in the items like below
{socials.p.media}
/>

*/}
        <SocialItem
        media='Instagram'
        id='instagram'
        img='https://picsum.photos/51'
        />
        
        <SocialItem 
        media='Whatsapp'
        id='whatsapp'
        img='https://picsum.photos/52'
        />
       
        </ul>
        );
   }

   export default Social;
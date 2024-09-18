import React from 'react';
import TeamMember from './TeamMember';



function Team(){
const info = [
    {   
        id: 1,
        img:'./images/img01.jpg',
        name:'Walter white 1',
        position: 'dev',
        website:'website',
        phone:'phone',
        email:'email',
        
    },
    {   
        id: 2,
        img:'./images/img01.jpg',
        name:'Walter white 2',
        position: 'dev',
        website:'website',
        phone:'phone',
        email:'email',
        
    }
];

const members = info.map((member) => (
<TeamMember
    key={member.id}
    info={member}
    />));

    /*
    I HAD AN ISSUE WITH  TypeError: Cannot read properties of undefined (reading 'img')

    BUT ChatGpt helps me this is what was befor 
    const members = info.map(member => 
<TeamMember
    key={member.id}
    img={member.img}
    name={member.name}
    position={member.position}
    website={member.website}
    phone={member.phone}
    email={member.email}
    />);

    */


    return(
        <div className='row'>
            {members}
        </div>
    )
}

export default Team;
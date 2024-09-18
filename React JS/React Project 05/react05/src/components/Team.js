import React, {Component} from 'react';
import TeamMember from './TeamMember';
import Memberinfo from './Memberinfo';


// classes & states

class Team extends Component {
constructor(){
    super();
    this.state = { info: Memberinfo }
}

// we create a method & call it mapping
mapping(x){
    const members = x.map (member => <TeamMember    
                            info={member}
    />
    );

    return members
}


render() {
    return(
        <div className='row'>
            {this.mapping(this.state.info)}
        </div>
    )
  }
}


export default Team;
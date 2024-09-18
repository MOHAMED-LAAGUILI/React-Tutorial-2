import React, { Component } from 'react';


class TeamMember extends Component{
    render(){
      return(
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
                <img alt='actor'
                  style={{ maxWidth: '100%', borderRadius: '7px' }}
                  src={this.props.info?.img}
                />
             
            </div>
            <div className='card-body'>
                <h2>{this.props.info?.name}</h2>
                <h5>{this.props.info?.position}</h5>
                <div>{this.props.info?.website}</div>
                <div>{this.props.info?.phone}</div>
                <div>{this.props.info?.email}</div>
            </div>
          </div>
        </div>
        )
    }
}

export default TeamMember;
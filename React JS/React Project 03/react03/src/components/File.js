import React, {Component} from 'react';




class File extends Component{
    // methodes like functions
    method(nm){
        return  nm
    }


    render() {
        const fname = 'Mohamed';
        const lname = this.method('Laaguili');

        return (
            <div>
         <h1>{this.props.fname} {this.props.lname}</h1>
         {/*  <h1>{`${fname} ${lname}`}</h1> */}
            </div>
        )
    }
}

export default File;
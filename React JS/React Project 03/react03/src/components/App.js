import React, {Component} from 'react';
import File from './File.js';

/*
// Old Way
// has few limited benifits and fonctionality
// but it a good start for beginning

function App(){
    return(
    <div>
  <h1>test</h1>
       
    </div>
    )
}

export default App;
*/

// new way
// has alot of benifits and fonctionality cause it exteded from React.Component

class App extends Component{
    render() {
        return (
            <div>
                <File fname="mohamed0" lname="laaguili" />
                <File fname="mohamed1" lname="laaguili" />
                <File fname="mohamed2" lname="laaguili" />
                <File fname="mohamed3" lname="laaguili" />
            </div>
        )
    }
}

export default App;
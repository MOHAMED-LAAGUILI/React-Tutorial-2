import React from 'react'; // JSX
import App from './Components/App';
import './style.css'

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);


/*
import ReactDOM from 'react-dom'; // Browser Dom view
ReactDOM.render(<App/>,document.getElementById('root'));
*/


/*
ReactDOM.render(What , Where)
*/

/* // Method 1
ReactDOM.render(
    // JSX
<div style={{color: "red"}}>
<h1>Design is my life.</h1>
<p>Graphic and Web design are far more than a job for me. </p>
    <ul>
    <li> Instagram </li>
    <li> Instagram </li>
    </ul>
</div>
, document.getElementById('root'));



 // Method 2
function App(){
 return (
<div style={{color: "red"}}>
<h1>Design is my life.</h1>
<p>Graphic and Web design are far more than a job for me. </p>
    <ul>
    <li> Instagram </li>
    <li> Instagram </li>
    </ul>
</div>
 )
}

ReactDOM.render(<App/>,document.getElementById('root'));
*/

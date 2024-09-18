import React from "react";

function Header() {

const client ="Designer";
/*
    if(client === "Designer"){
        title = "Designer";
    }else{
        title = "Programer";
        }
        
        */
       
        const title ={
          designer: "Design",
          programmer: "Programming"
        }

const info = {
name: "Mohamed",
nick: "Laaguili"
}


  return (

    <nav className="ps-5 my-4 bg-dark p-3 text-light fw-bold display-5 sahdow rounded-pill">
        {/* by shorten if */}
        {client === "Designer" ? "Design" : "Programming"} is my life
        {<br></br>}
        {/* by object */}
        {client === "Designer" ? title.designer : title.programmer } is my life
       
        {<br></br>}
        {/* {inside this we use js } */}
        hello {info.name + ' ' + info.nick}
        {<br></br>}   
         {/* ES 6 */}
        hello {`${info.name} ${info.nick}`}
    </nav>

    
  );
}

export default Header;

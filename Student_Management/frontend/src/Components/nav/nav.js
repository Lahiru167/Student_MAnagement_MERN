import React from "react";

function Nav() {
    return (
        <div>  
           <ul className="nav">
            <li className="nav-item">
             <link to="/mainhome"className="active home-a" >
                <h1>Home</h1>
            </link>
            </li>
            <li className="nav-item">
                <h1>addStudent</h1>
            </li>
            <li className="nav-item">
                <h1>Student details</h1>
            </li>
            
            </ul>     
        </div>
    );
}

export default Nav;
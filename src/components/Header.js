import React from 'react';
import logo from './logo.jpg';

const header = () => {
    return (
        <>
           <header className="header">
               <nav className="nav">
                   <div className="img">
                       <img src={logo} alt="logo"></img>
                   </div>
               </nav>
           </header>
        </>
    )
}

export default header;

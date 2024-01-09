// import { Link } from "react-router-dom"
// import Styles from "./Navbar.module.css"
// import React from "react";

// const Navbar =() =>{
//     return (
//      <header className={Styles.header}>
//         <nav className={Styles.nav}>
//             <ul className={Styles.linksWrapper}>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/dashboard">Dashboard</Link></li>
//                 <li><Link to="/login">login</Link></li>
//             </ul>
//         </nav>
//      </header>
//     )
//   }
  
//   export default Navbar


import { Link } from "react-router-dom"
import Styles from "./Navbar.module.css"
const Navbar =() =>{
    return (
     <header className={Styles.header}>
        <nav className={Styles.nav}>
            <ul className={Styles.linksWrapper}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/signup">signup</Link></li>
            </ul>
        </nav>
     </header>
    )
  }
  
  export default Navbar
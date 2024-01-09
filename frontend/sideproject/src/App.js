import React from "react";
import AppRoutes from "./routes/AppRoutes.js";
import Navbar from "./layouts/navbar/Navbar.js";
import MemePage from "./pages/memes/MemePage.js";


function App() {
  return (
    <div>
       <Navbar />
      <AppRoutes /> 
      {/* <LoginForm/>
      <Signup/> */}
      {/* <MemePage/> */}
    </div>
  );
}

export default App;

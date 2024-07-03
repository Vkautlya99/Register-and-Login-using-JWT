
import { useState } from 'react';


function App() {

 
  let [menustatus, setMenustatus] = useState(false);


  
  return (
    <div className="App">
      <button className="menu-icon" onClick={() => setMenustatus(!menustatus)}>
        {menustatus ?
          <span>&times;</span>
          :
          <span>&#9776;</span>
      }
       </button>
      <div className={`menu ${menustatus ? "activeMenu" : ""}`}>
        <ul>
          
          <li>About</li><br />
          <li>Employee</li><br />
          <li>Leave</li><br />
          <li>Payroll</li><br />
          <li>Students</li><br />
          <li>Logout</li><br />
          <li>Career</li><br />
          <li>Support</li><br />
        </ul>
      </div>
     
     
    

      
      
     
    </div>
  );
}

export default App;
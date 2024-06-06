
import './App.css';
import { useState } from 'react';

function App() {

  const [name,setName]=useState('Enter Your Name');
  const [fullname,setFullName]=useState();
  const onchange=(e)=>{
    setName(e.target.value)
  }
   
  const setthename =()=>{
    
      setFullName(name)
    
  }

  return (
    
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
    <div className="card" style={{width: "18rem"}}>
 
  <div className="card-body text-center">
    <h5 className="card-title">Hello {fullname}</h5>
    <input className="card-text" type="text" value={name} onChange={onchange}/>
     <button className='btn btn-primary btn-lg my-2' onClick={setthename}>Set Name 👍</button>
  </div>
  </div>
  </div>

    
  );
}

export default App;

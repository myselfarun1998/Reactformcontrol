import React from 'react';
import Login from './Components/Login';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import './checkout.css';

import CheckOut from './Myform/CheckOut';

function App() {
  return (
    <div className="App">
      <h1 className='check_name'> Check Out Form</h1>
  <CheckOut/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { CategorySection } from './components/CategorySection';
import { HerSection } from './components/HerSection';
import { Navbar } from './components/Navbar';


import { useState } from 'react';

function App() {


  const [counter, setCounter] = useState(0);


  function add(){
    setCounter(counter + 1);
  }

  function sub(){
    setCounter(counter - 1);
  }




  return (
    <>
      <Navbar title={"MyApp"} />


      <h1 className='text-danger text-center'> Count: {counter} </h1>

      <hr />

      <center>
        <button className="btn btn-success m-1" onClick={add}>Add</button>
        <button className="btn btn-success m-1" onClick={sub}>Sub</button>
      </center>

      <HerSection/>
      <CategorySection/>

    </>
  );
}

export default App;

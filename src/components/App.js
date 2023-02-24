import React, { useState } from 'react'
import SideNav from './SideNav';
import MainSection from './MainSection';
import Header from './Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.css';
const App = () => {

  let [el, setEl] = useState("");
  return (
    <div id="main">
    <Header />
      <div className='row'>
        <div className='col-md-2'>
          <SideNav change={setEl}/>
        </div>
        <div className='col-md-10'>
          <MainSection active = {el}/>
        </div>
      </div>
    </div>
  )
}


export default App;

import React, { Component } from 'react';
// import Button from "./Button/Button";
import Navbar from './Navbar/Navbar'
// import Article from './Article/Article';
import Destination from './Destination/Destination'
import Crew from './Crew/Crew'

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <App />
      break
    case "/destination":
      component = <Destination />
      break
    case "/crew":
      component = <Crew />
      break
    // case "/technology":
    //   Component = Technology
    //   break
  }
  return (
    <>
      <Navbar />
      { component}
    </>
  );
}

export default App;

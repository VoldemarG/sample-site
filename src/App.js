import React, {Component} from 'react';
import Header from './Components/header';
import Main1 from './Components/main1';
import Footer from './Components/footer';
import './App.scss';
import Main2 from './Components/main2';
import Main3 from './Components/main3';
import Main4 from './Components/main4';
import Main5 from './Components/main5';
const App = ()  => {
  return (
    <div className="App">
    <Header />
    <Main1 />
    <Main2 />
    <Main3 />
    <Main4 />
    <Main5 />
    <Footer />
    </div>
  );
}

export default App;

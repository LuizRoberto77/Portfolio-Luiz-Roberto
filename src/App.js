import React from 'react';

import './styles.css';

import Header from './Components/Header';
import Hab from './Components/Hab';
import Repo from './pages/Repo';


const App = () =>(
  <div className="App">
    <Header />
    <Hab />
    <Repo />
  </div>
);

/*function App() {
  return (
   <div className="App">
    <h1>Hello RocketSeat</h1>
   </div>
  );
}*/

export default App;

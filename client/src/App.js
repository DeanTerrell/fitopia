import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import {CreateWorkout} from './components/CreateWorkout';
import {EditWorkout} from './components/EditWorkout';

import {GlobalProvider} from './context/GlobalState';

import './App.min.css';

function App() {
  return (
   <GlobalProvider> 
      <Router>
         <Navbar />
         <main>
            <Route path="/" exact component={Home} />
            <Route path="/create" exact component={CreateWorkout} />
            <Route path="/edit/:id" exact component={EditWorkout} />
         </main>
      </Router>
   </GlobalProvider>
  );
}

export default App;

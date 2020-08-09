import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todos from './components/Todos';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Todos/>
      </Container>      
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MiniMentor from './components/MiniMentor/MiniMentor';
import Footer from './components/Footer/Footer'
import SearchBar from './components/SearchBar/SearchBar'
const port = process.env.PORT || 5001;

function App() {
  const [message, setMessage] = useState('');

  //code that calls the server

  useEffect(() => {
    axios.get(`http://localhost:${port}/mentor`)
      .then(response => (setMessage(response.data)))
      .catch(error => console.error(`There was an error retrieving the message: ${error}`))
  }, [])

  //TODO: add react routing, switching user list and detailed

  // the first web page
  return (
    <div className="App">
      <SearchBar/>
      <MiniMentor users={message} />
      <Footer/>
    </div>
  );
}

export default App;
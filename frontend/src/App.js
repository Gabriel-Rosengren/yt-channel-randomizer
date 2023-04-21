import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import axios from 'axios'

function App() {
  return (
    <>
      <Header function={logInUser}></Header>
      <SearchBar function={getSuggestedChannels}></SearchBar>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}

function logInUser() {
  // Send 
  axios.post('/login', {

  })
}

function getSuggestedChannels(searchQuery) {
<<<<<<< HEAD
  axios.get(`http://localhost:8000/search?searchQuery=${encodeURIComponent(searchQuery)}`)
=======
  axios.get(`/search?searchQuery=${encodeURIComponent(searchQuery)}`)
>>>>>>> a66bafff669a5ee94edb976a1ca42371842fd684
  .then(function (response) {
    console.log('Response Recieved')
    
  })
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
}
export default App;



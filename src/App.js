import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [ userName ] = useState([]);
//  const [ products, setProducts ] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/login/')
      .then(response => response.json())
      .then(data => {
        console.log('hola');
        console.log(data)})
  })

    //    const completedData = data.map(prod => {
    //      if (!prod.imageUrl) {
    //        prod.imageUrl = 'https://freepikpsd.com/file/2019/10/image-not-found-png-4-Transparent-Images.png'
    //      };
    //      return prod;
//        });
  //      setProducts(completedData);
//      })
//  }, []);

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/

}

export default App;

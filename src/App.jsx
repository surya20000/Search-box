import './App.css';
import data from "./Resources/CountryData.json";
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClick = () => {
    setName(value);
  }

  const handleSearchItem = (itemName) => {
    setName(itemName);
  }

  const handleKey = (e) => {
    if (e.key === "Escape"){
      console.log(e.key);
      document.getElementById("box").style.display = "none";
    } else {
      document.getElementById("box").style.display = "inline";
    }
  }

  return (
    <>
      <div>
        <h1> Search </h1>
        <input type="text" onChange={handleChange} onKeyDown={handleKey} />
        <button onClick={handleClick}>Search </button>
      </div>
      <div id="box" style={{display: 'none'}}>
        {
          data.filter((item) => {
            const searchedValue = value.toLowerCase();
            const res = item.name.toLowerCase();
            return (
              searchedValue &&
              res.startsWith(searchedValue) &&
              res !== searchedValue
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div onClick= {() => {handleSearchItem(item.name)}}
            key={item.name}
            >
              {item.name}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App;

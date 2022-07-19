import { useState } from 'react';
import './App.css';
import chart from './assets/chart.png';

async function fetchStock(code) {
  const response = await fetch('/stocks?' + new URLSearchParams({ code }));
  return response.json();
}

function App() {
  const [value, setValue] = useState('');
  const [stock, setStock] = useState({});

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('code:', value);

    const data = await fetchStock(value);

    console.log('response:', data);

    setStock(data);
  };

  return (
    <div className="app">
      <header className="header">
        <img className="logo" src={chart} alt="logo" />
        <h1>Welcome to BlockStocks!</h1>
        <form className="form" onSubmit={handleSubmit}>
          {/* TODO: Labels */}
          {/* <label className="form-label" htmlFor="search">
            Search for stocks:
          </label> */}
          <div className="form-container">
            <input
              // id="search"
              className="input"
              placeholder="AAPL, GOOG..."
              onChange={handleChange}
              value={value}
            />
            <button className="button" type="submit">
              Search
            </button>
          </div>
        </form>
        {stock.code && (
          <div className="stock">
            <div>NASDAQ: {stock.code}</div>
            <div className="stock-value">{stock.value}</div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

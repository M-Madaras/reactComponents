import { useState } from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(0);
const add = () => setCount(count + 1);
const reset = () => setCount(0);
const sub = () => setCount(count - 1);
const tenPlus = () => setCount(count + 10);
const tenMinus = () => setCount(count - 10);
if (count < 0) {
  setCount(0)
}
return(
  <main>
      <header><h1>Header</h1></header>
      <div>
      <h3>Counter: {count}</h3>
      <button onClick={reset}> Reset</button>  <></>
      <button onClick={sub}> -</button> <></>
      <button onClick={add}>+</button> <></>
      <button onClick={tenPlus}>+10</button> <></>
      <button onClick={tenMinus}>-10</button>
      </div>
  </main>
)
}


export default App;

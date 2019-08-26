import React, { useContext } from 'react';
import './App.css';
import {OpContext} from './context';

function App() {

  const context = useContext(OpContext);
  return (
    <>
      <div className="d-flex"><h1>&#128722;</h1><sup className="badge">{context.cart.reduce((acc,cv)=>acc+cv.quantity,0)}</sup></div>
      <div className="App">
        {
          context.products.map(product=>(
            <div className="card" key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <button onClick={()=>context.add(product)}>Add</button>
              {context.cart[context.cart.findIndex(item=>item.id === product.id)] && context.cart[context.cart.findIndex(item=>item.id === product.id)]['quantity'] ?<button onClick={()=>context.remove(product.id)}>Remove</button>:""}
            </div>
          ))
        }
      </div>
     </>
  );
}

export default App;

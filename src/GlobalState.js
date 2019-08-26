import React, { useReducer } from 'react';
import {OpContext} from './context';
import opReducer from './reducer';
import App from './App';
import { ADD, REMOVE } from './reducer'



const GlobalState = props => {

    const [state , dispatch] = useReducer(opReducer,{
        products:[
            {
                id:1,
                name:"one",
                desc:"desc of one"
            },
            {
                id:2,
                name:"two",
                desc:"desc of two"
            },
            {
                id:3,
                name:"three",
                desc:"desc of three"
            },
            {
                id:4,
                name:"four",
                desc:"desc of four"
            },
            {
                id:5,
                name:"five",
                desc:"desc of five"
            }
        ],
        cart : []
    })

    const addOne = (data) => {
        dispatch({
            type:ADD,
            payload:{data}
        })
    }
    
    const removeOne = (id) => {
        dispatch({
            type:REMOVE,
            payload:{id}
        })
    }

        return(
            <OpContext.Provider value={{
                products:state.products,
                cart:state.cart,
                add:addOne,
                remove:removeOne
            }}>
                <App />
            </OpContext.Provider>
        )

}

export default GlobalState;
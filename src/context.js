import { createContext } from 'react';


export const OpContext = createContext({
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
    cart : [],
    addOne : () => {},
    removeOne: () => {}
})
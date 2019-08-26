export const ADD = "ADD";
export const REMOVE = "REMOVE";


const addOne = (state,data) => {
    // console.log(state)
    const { cart, products } = state;
    const index = cart.findIndex(item => item.id === data.id);
    // let index = cart.findIndex(item => item.id === data.id)
    // if(cart.length){
    //     cart.forEach(function(item,i){
    //         console.log(this[i])
    //         if(item.id === data.id){
    //             index = 1;
    //             this[i].quantity++;
    //         }
    //     },cart);
    // }
    // else {
    //     if(index>-1) ++cart[index].quantity;
    //     else data.quantity = 1;
    // }
    if(index>-1) ++cart[index].quantity;
    else data.quantity = 1;
    return { products, cart: index>-1 ? cart : [...cart, data] }
}

const removeOne = (state,id) => {
    const { cart, products } = state;
    const index = cart.findIndex(item => item.id === id)
    if(index>-1 && cart[index].quantity>0) --cart[index].quantity;
    return { products, cart:[...cart] }
}

export const opReducer = (state,action) => {
    // console.log(state)
    switch(action.type){
        case ADD:
            return addOne(state,action.payload.data);
        case REMOVE :
            return removeOne(state,action.payload.id);
        default:
            return state;
    }
}

export default opReducer;
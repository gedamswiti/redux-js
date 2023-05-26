import store from "./store.js" 
 
store.subscribe(() => { 
    console.log('store.getState()' , store.getState()) 
   }) 
    
 
 
 
 
store.dispatch({type: "increment"}); 
 
store.dispatch({type: "increment"}); 
store.dispatch({type: " test unknown"}); 
 
 
store.dispatch({type: "unknown"}); 
 
store.dispatch({type: "decrement"});



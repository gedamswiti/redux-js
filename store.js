import redux from 'redux'; 
const reduxReducerFunction = (state = {counter: 0 , status : ''} , action) => { 
    switch(action.type) { 
        case 'increment': 
               return{ 
                ...state, 
                counter: state.counter + 1, 
                status: action.type 
               } 
         case 'decrement': 
                return{ 
                    ...state, 
                    counter: state.counter - 1, 
                    status: action.type 
 
                } 
  
            default: 
                return{ 
                    ...state, 
                    status: action.type 
 
                } 
    } 
} 
 
const store = redux.createStore(reduxReducerFunction , {counter: 0 , status: ''}) 
 
 
export default store;

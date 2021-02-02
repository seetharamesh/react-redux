
/*The store holds the current state. The four major functions that we can perform on store are:
  1. access to state via store.getState()
  2. update state via store.dispatch(action)
  3. register listeners via store.subscribe(listener)
  4. unregister listeners via the function returned in step 3
  5. eg. const unsubscribe = store.subscribe(listener);
     unsubscribe();
*/
import {createStore} from 'redux';
import reducer from './reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

// function saveToLocalStorage(state){
//   try{
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state',serializedState);
//   }catch(e){
//     console.log(e);
//   }
// }

// function loadFromLocalStorage(){
//   try{
//   const serializedState = localStorage.getItem('state');
//   if(serializedState === null) return undefined
//   return JSON.parse(serializedState)
// }catch(e){
//   console.log(e);
//   return undefined;
// }
// }

/*Note devToolsEnhancer is added for debugging purpose.
  First install npm install redux-devtools-extension and below devToolsEnhancer() in your createStore*/
 // const persistedState = loadFromLocalStorage()
console.log("inside store");
// const store = createStore(reducer,persistedState,devToolsEnhancer()); //create the store and pass the Reducer so the store can be updated constantly

 const store = createStore(reducer,devToolsEnhancer()); //create the store and pass the Reducer so the store can be updated constantly
console.log("inside store AFTER createstore(reducer) is called and store looks like this ",store);
 // store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;

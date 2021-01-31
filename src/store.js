
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
console.log("inside store");
const store = createStore(reducer); //create the store and pass it to Reducer
console.log("inside store AFTER createstore(reducer) is called and store looks like this ",store);
export default store;

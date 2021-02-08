/*The boiler plate of reducer function takes initial state and action as arguments.
  The new state is returned with the action and the data entered in Add contact form by the user.
  If nothing is changed the previous state will be returned
  First time when the page loads since the API data is loaded in store that data will be displayed
  Secondly when user performs ADD CONTACT action the store is updated with new contact and page is rendered again*/

export default function reducer(state=[],action){
  console.log("inside reducers");

    switch(action.type){
        case "ADD_CONTACT":
            return [
                    ...state,
                    {
                    first_name: action.payload.first_name,
                    avatar:action.payload.avatar,
                    email:action.payload.email,
                    idNum:action.payload.idNum
                  }
                ]
        default:
            return state;
    }

}

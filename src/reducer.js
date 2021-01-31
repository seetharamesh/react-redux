export default function reducer(state=[],action){
  console.log("inside reducers");
  console.log("inside Switch and consoling state", state);

    switch(action.type){
        case "Add_Contact":
            return [...state, {Name: action.payload.Name,Avatar:action.payload.Avatar,Email:action.payload.Email,Id:action.payload.Id}];
        default:
            return state;
    }

}

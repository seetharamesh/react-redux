
export const ADD_CONTACT = 'ADD_CONTACT'

//Action creator is a function that creates the action ADD_CONTACT
export const addContact = (userData) => ({
    type: ADD_CONTACT,
    payload: userData
})

export default function eventReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_EVENT':
      return [...state, action.event]
    default:
      return state;
  }
}
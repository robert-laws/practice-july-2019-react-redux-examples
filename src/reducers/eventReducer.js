export default function eventReducer(state = [], action) {
  switch(action.type) {
    case 'LOAD_EVENTS':
      return action.events
    case 'ADD_EVENT':
      return [...state, action.event]
    default:
      return state;
  }
}
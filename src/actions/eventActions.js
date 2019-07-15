const baseUrl = 'http://localhost:3001/events/';

export function getEvents() {
  return dispatch => {
    return fetch(baseUrl)
      .then(response => response.json())
      .then(events => {dispatch({ type: 'LOAD_EVENTS', events })
    })
  }
}

export function addEvent(event) {
  return dispatch => {
    return fetch(baseUrl + (event.id || ''), {
      method: event.id ? 'PUT' : 'POST',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify(event)
    })
      .then(response => response.json())
      .then(event => {dispatch({ type: 'ADD_EVENT', event})
    })
  }
}

// export function addEvent(event) {
//   return { type: 'ADD_EVENT', event }
// }

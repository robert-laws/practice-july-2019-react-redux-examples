import React from 'react';

const EventsForm = ({ eventName, attendees, location, onChange, onSubmit }) => {
  return (
    <div className="row">
      <form className="col s12" onSubmit={onSubmit}>      
        <div className="row">
          <div className="input-field col s12">
            <input id="eventName" name="eventName" type="text" className="validate" value={eventName} onChange={onChange} />
            <label htmlFor="eventName">Event Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="attendees" name="attendees" type="text" className="validate" value={attendees} onChange={onChange} />
            <label htmlFor="attendees">Attendees Number</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="location" name="location" type="text" className="validate" value={location} onChange={onChange} />
            <label htmlFor="Location">Location</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>        
  )
}

export default EventsForm;
import React from 'react';

const EventsList = ({events}) => {
  const eventsList = events.map(({eventName, attendees, location}) => (
    <div className="col s3">
      <div className="card-panel teal">
        <p className="white-text">
          <strong>
            {eventName}
          </strong>
        </p>
        <p className="white-text">{attendees}</p>
        <p className="white-text">{location}</p>
      </div>
    </div>
  ))

  return (
    <>
      {eventsList}
    </>
  )
}

export default EventsList;
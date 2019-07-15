import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents, addEvent } from '../actions/eventActions';
import EventsForm from '../components/EventsForm';
import EventsList from '../components/EventsList';

class EventsContainer extends Component {
  state = {
    eventName: '',
    attendees: '',
    location: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addEvent(this.state);
    this.setState({
      eventName: '',
      attendees: '',
      location: ''
    })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    return (
      <>
        <EventsForm onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <EventsList events={this.props.events} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { addEvent, getEvents })(EventsContainer);
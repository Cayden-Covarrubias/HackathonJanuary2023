import React, { useState } from 'react'

function BookingPage() {
    const [username, setUsername] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [text,setText] = useState('Welcome, please Select the date and destination');
    const [sub,setSub] = useState(false);

    const handleSubmit = ()=>{
        setText(`Thank you ${username} for Booking with us!`);
        setSub(true);
    }

  return (
    <div className='book1'>
    {!sub?
    <div className="book-in-page">
      <h1>{text}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={event => setDestination(event.target.value)}
            className="input-field"
          />
        </label>
        <label>
            Date:
            <input type='datetime-local' value={date}  onChange={event => setDate(event.target.value)}
            className="input-field" />
        </label>
        <br />
        <button type="submit" className="sign-in-button">
          Confirm Booking
        </button>
      </form>
    </div>:
    <h1>{text}</h1>}
    </div>
  );
}

export default BookingPage
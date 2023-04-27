import './App.css';
import Logo from './img/UNO Logo.svg'

function App() {
  return (
    <div className="App">
      <header>
        <div className='nav_content'>
          <div className='navbar'>
            <a className='link active' href='#'>Booking</a>
            <a className='link' href='#services'>Services</a>
            <img className='logo' src={Logo}></img>
            <a className='link' href='#'>Policy</a>
            <a className='link' href='#contact'>Contact</a>
          </div>
        </div>

        <a className='book_link' href='#'>Book Now</a>
      </header>

      <div id='services' className='services'>
        <div className='services_info'>

          <p>Haircut 45$: A haircut including fades, longer length cuts, or any general style.</p>

          <p>Full Beard Trim 45$: A full beard trim service including a hot towel shave on the cheek and neck.</p>

          <p>Haircut & Beard Trim $90: A combination of a haircut and a full beard trim service.</p>

          <p>Haircut and Shave $110: Both a full-face hot towel shave and haircut service.</p>

          <p>Full Face Shave $65: A detailed, full hot towel face shave service.</p>

          <p>Full Head Shave $65: A full hot towel head shave service.</p>

          <p>Quick Clean-Up $30: Includes a hairline and neck shape up and shave for the in-between stage of haircuts.</p>

          <p>Quick Beard Trim $20: A beard cleanup using only clippers, no razor or shave included. </p>

          <p>Child/Senior Haircut 40$: Any haircut for children under 10 and seniors over 65.</p>
          <p><b>HST Not Included*</b></p>
        </div>
      </div>

      <div id="contact" className='contact'>


      </div>

    </div>
  );
}

export default App;

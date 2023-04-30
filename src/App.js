import './App.css';
import { useRef } from 'react';
import Logo from './img/UNO Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faGripLines } from '@fortawesome/free-solid-svg-icons';
import ScrollNavbar from './ScrollNavbar';

function App() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <div className="App">
      <ScrollNavbar></ScrollNavbar>
      <header id='booking'>
        <img className='logo' src={Logo}></img>
        <nav ref={navRef}>
          <a className='link active' onClick={showNavbar}>Booking</a>
          <a className='link' href='#services' onClick={showNavbar}>Services</a>
          <img className='logo_nav' src={Logo}></img>
          <a className='link' href='#policys' onClick={showNavbar}>Policy</a>
          <a className='link' href='#contact' onClick={showNavbar}>Contact</a>
          <button className='nav-btn' onClick={showNavbar}>
            <FontAwesomeIcon className='Xmark' icon={faXmark} size='4x' />
          </button>
        </nav>
        <button className='nav-btn open' onClick={showNavbar}>
          <FontAwesomeIcon icon={faGripLines} size='3x' />
        </button>
        <div className='book'>
          <a className='book_link' href='https://barberiaunoinc.resurva.com/' target='book'>Book Now</a>
        </div>
      </header>

      <div id='services' className='services'>
        <div className='service_cards'>
          <div className='card'>
            <p className='heading'>Haircut <span className='uno_color'>45$:</span></p>
            <p className='desc'>A haircut including fades, longer length cuts, or any general style.</p>
          </div>
          <div className='card'>
            <p className='heading'>Full Beard Trim <span className='uno_color'>45$:</span></p>
            <p className='desc'>A full beard trim service including a hot towel shave on the cheek and neck.</p>
          </div>
          <div className='card'>
            <p className='heading'>Haircut & Beard Trim <span className='uno_color'>$90:</span></p>
            <p className='desc'>A combination of a haircut and a full beard trim service.</p>
          </div>
          <div className='card'>
            <p className='heading'>Haircut and Shave <span className='uno_color'>$110:</span></p>
            <p className='desc'>Both a full-face hot towel shave and haircut service.</p>
          </div>
          <div className='card'>
            <p className='heading'>Full Face Shave <span className='uno_color'>$65:</span></p>
            <p className='desc'>A detailed, full hot towel face shave service.</p>
          </div>
          <div className='card'>
            <p className='heading'>Full Head Shave <span className='uno_color'>$65:</span></p>
            <p className='desc'>A full hot towel head shave service.</p>
          </div>
          <div className='card'>
            <p className='heading'>Quick Clean-Up <span className='uno_color'>$30:</span></p>
            <p className='desc'>Includes a hairline and neck shape up and shave for the in-between stage of haircuts.</p>
          </div>
          <div className='card'>
            <p className='heading'>Quick Beard Trim <span className='uno_color'>$20:</span></p>
            <p className='desc'>A beard cleanup using only clippers, no razor or shave included.</p>
          </div>
          <div className='card'>
            <p className='heading'>Child/Senior Haircut <span className='uno_color'>40$:</span></p>
            <p className='desc'>Any haircut for children under 10 and seniors over 65.</p>
          </div>
        </div>
        <p className='hst'><b>HST Not Included*</b></p>
      </div>

      <div id='policys' className='policys'>
        <div className='policy_info'>
          <h1 className='heading'>CANCELLATION POLICY</h1>
          <p>
            Cancellations are accepted as we understand that things happen, but will require a minimum of 3 hours notice prior to cancellation.
          </p>
          <p>
            No call-no show policy: The first no show will be waved and forgiven, but if no showing persists then the client is subject to pay for 50% of the missed appointment before rebooking.
          </p>
          <p>
            In case of emergency and you cannot cancel your appointment within a 3 hour time frame, we strongly urge to call the shop and cancel as soon as possible.
          </p>
        </div>
      </div>

      <div id="contact" className='contact'>

        <h1>Contact Us</h1>

      </div>

      <footer>
        <img className='footer_logo' src={Logo}></img>
      </footer>
    </div>
  );
}

export default App;

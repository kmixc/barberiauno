import './App.css';
import Logo from './img/UNO Logo.svg'

function App() {
  return (
    <div className="App">
      <header>
        <div className='nav_content'>
          <div className='navbar'>
            <a className='link active' href='#'>Booking</a>
            <a className='link' href='#'>Services</a>
            <img className='logo' src={Logo}></img>
            <a className='link' href='#'>Policy</a>
            <a className='link' href='#'>Contact</a>
          </div>
        </div>
        <a className='book_link' href='#'>Book Now</a>
      </header>

    </div>
  );
}

export default App;

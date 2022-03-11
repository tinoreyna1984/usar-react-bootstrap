import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

/**
 * App para uso de React Bootstrap
 */

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        React Bootstrap <br/>
        <Button variant="primary" onClick={() => alert("Holaaaaaa...")}>Hazme clic</Button>{' '}
      </div>
    </div>
  );
}

export default App;

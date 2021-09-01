import './App.css';
import NavbarComponent from './components/Navbar';
import {Route} from 'react-router-dom';
import Post from './components/Post';
//import '../node_modules/react-bootstrap/dist/react-bootstrap.min'
function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Route exact path="/" component={Post} />
    </div>
  );
}

export default App;

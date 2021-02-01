import './App.css';
import Heder from './parts/Heder';
import { BrowserRouter,Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Heder/>
      <h1>Repairer Service</h1>
      {/* <Login></Login> */}
      
      <div className="container">
          <div className="row">

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <Home/>
      </Route>
      </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

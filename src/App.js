import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup';
import SignupChakra from './pages/signup-chakra';

import {BrowserRouter as Br, Routes, Route} from 'react-router-dom'
import Signin from './pages/signin';
import Home from './pages/home';

function App() {
  return (
    <Br>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<SignupChakra/>} />
      </Routes>
    </Br>
  );
}

export default App;

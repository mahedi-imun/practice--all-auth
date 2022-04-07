import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {/* {<SignUp></SignUp>} */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/login' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

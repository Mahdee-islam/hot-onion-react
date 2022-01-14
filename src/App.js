
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Breakfast from './components/Breakfast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Lunch from './components/Lunch/Lunch';
import Menu from './components/Menu/Menu';
import AuthProvider from './context/AuthProvider';





function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Header/>
       <Banner/>
       <BrowserRouter>
       <Menu/>
       <Routes>
        <Route path = "/breakfast" element = { <Breakfast/> } />
        <Route path = "/lunch" element = { <Lunch/> } />
        <Route path = "/dinner" element = { <Dinner/> } />
       </Routes>
       <Login/>
       </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

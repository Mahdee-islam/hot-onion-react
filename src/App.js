
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './components/Booking/Booking';
import Breakfast from './components/Breakfast/Breakfast';
import Dinner from './components/Dinner/Dinner';
import Home from './components/Home/Home';
import Lunch from './components/Lunch/Lunch';
import AuthProvider from './context/AuthProvider';








function App() {
  return (
    <div className="App">
     <AuthProvider>
     
       <BrowserRouter>
       <Home/>
       <Routes>
       
        <Route path = "/breakfast" element = { <Breakfast/> } />
        <Route path = "/lunch" element = { <Lunch/> } />
        <Route path = "/dinner" element = { <Dinner/> } />
        <Route path = "/booking/:mealId" element = { <Booking/> } />
       
       </Routes>
       </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;

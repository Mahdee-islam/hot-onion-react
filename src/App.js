
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';





function App() {
  return (
    <div className="App">
      <Header/>
       <Banner/>
       <BrowserRouter>
       <Menu/>
       <Routes>
        
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

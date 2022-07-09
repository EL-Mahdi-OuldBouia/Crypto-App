import './App.css';
// import Axios from 'axios';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import LogPage from './components/LogPage/LogPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Currencies from './components/Currencies/Currencies';




function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navbar />} />
          <Route exact index element={<> <Navbar /><Home /> </>} />
          <Route exact path='/cryptocurrencies' element={<> <Navbar /> <Currencies /></>} />
          <Route path="*" element={<h1>Page not found</h1>} />
          <Route path="/logpage" element={<LogPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

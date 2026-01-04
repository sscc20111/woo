import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header';
import { Main, Sub1, Sub2, Sub3, Sub4 } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='ContentsBody'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sub1" element={<Sub1 />} />
          <Route path="/sub2" element={<Sub2 />} />
          <Route path="/sub3" element={<Sub3 />} />
          <Route path="/sub4" element={<Sub4 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './component/Login';
import SignUp from './component/Signup';
import Homepage from './component/Homepage';

function App() {
  return (
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    
    </BrowserRouter>
  
  );
}

export default App;
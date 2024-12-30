import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import Saved from './components/Saved';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="saved" element={<Saved />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

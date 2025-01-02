import './App.css';
import Layout from './webapp/Layout';
import Home from './webapp/info/HomePage';
import Profile from './webapp/info/ProfilePage'
import Saved from './webapp/info/SavedPage';
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

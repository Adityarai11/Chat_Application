import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepages from './pages/Homepages';
import ChatPages from './pages/ChatPages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/chats" element={<ChatPages />} />
      </Routes>
    </div>
  );
}

export default App;

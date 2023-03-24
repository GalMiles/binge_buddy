import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForYou from "./pages/ForYou";
import Series from "./pages/Series"
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';


function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Series/>}/>
        <Route path="/foryou" element={<ForYou/>} />
      </Routes>
    </BrowserRouter>
    <SimpleBottomNavigation />
    </div>
  );
}

export default App;
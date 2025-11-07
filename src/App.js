
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';
import Main from "./components/Main";
import ConfirmedBooking from "./components/ConfirmedBooking";

function Home() {
  return (
    <>
      <Hero />
      <Highlights />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />   {/* 头部在所有页面显示 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Main />} />                 {/* 预订页 */}
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} /> {/* 结果页 */}
      </Routes>
      <Footer />   {/* 尾部在所有页面显示 */}
    </BrowserRouter>
  );
}

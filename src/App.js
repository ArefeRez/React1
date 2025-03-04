import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import Layout from './Layout';
import "./Card.css";
import Home from "./Home";
import { Route, Routes } from 'react-router-dom';
import ContactUs from './ContactUs';
import ProduktDetails from './ProduktDetails';
function App() {
  return (
    <Layout>
    <Routes>
      <Route>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/ContactUs"} element={<ContactUs/>}/>
        <Route path={"/Details/:id"} element={<ProduktDetails/>}/>
      </Route>
    </Routes>
    </Layout>
  )
};

export default App;

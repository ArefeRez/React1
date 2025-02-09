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
function App() {
  const cardList=[
    {img:img1 , title:"آموزش ساخت مدل های سه بعدی در نرم افزار بلندر و سابستنس پینتر(پروژه محور)" , author:"ذاکریان", price:"1,200,000 تومان"},    
    {img:img2 , title:"آموزش جامع ابزارهای هوش مصنوعی", author:"قاسمی زرگر", price:"6,40,000 تومان"},    
    {img:img3 , title:"توسعه ووکامرس (برنامه نویسی قالب فروشگاهی)", author:"صالحی", price:"6,00,000 تومان"},    
    {img:img4 , title:"آموزش CSS، یادگیری سریع، کاربردی و پروژه محور", author:"موسوی", price:"1,250,000 تومان"},
    {img:img4 , title:"آموزش CSS، یادگیری سریع، کاربردی و پروژه محور", author:"موسوی", price:"1,250,000 تومان"}
  ]
  return (
    <div className="App">
      <Layout>
      <div className="containerCard">
        {cardList.map((card , index)=> <Card title={card.title} author={card.author} img={card.img} price={card.price}/>)}
      </div>
      
      </Layout>
      </div>
  )
};

export default App;

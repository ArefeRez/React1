import "./ContactUs.css";
import { use, useState } from "react";
const ContactUs=()=>{
    const [title, setTitle]=useState("فرم تماس با ما")
    return(
        <>
        <div className="container">
        <div id="containerContact">
        <div className="contact" onClick={()=>setTitle("راه های ارتباطی")}>
            <div className="contactIcon">
            <i class="bi bi-telephone"></i>
            <p> راه های ارتباطی</p>
            </div>
            <p>تلفن : 02188454816 - 02191303737</p>
            <p>ایمیل : info@TopLearn.com</p>
            <p>آدرس : تهران،خیابان شریعتی ،خیابان ملک ، بن بست ایرانیاد ،پ ۱</p>
        </div>
        <div className="contact" onClick={()=>setTitle("مدیر موسسه")}> 
            <div className="contactIcon">
            <i class="bi bi-person"></i>
            <p> مدیر موسسه</p>
            </div>
            <p>نام و نام خانوادگی : ایمان مدائنی</p>
            <p>تلفن : 09126700311</p>
            <p>ایمیل : iman@madaeny.com</p>
        </div>
        <div className="contact" onClick={()=>setTitle("مدیر آموزش")}>
            <div className="contactIcon">
            <i class="bi bi-person"></i>
            <p> مدیر آموزش</p>
            </div>
            <p>نام و نام خانوادگی : حمیدرضا رضا</p>
            <p>تلفن : 09356700382</p>
        </div>
        </div>
        <div className="containerForm">
                <p id="pTitle">{title}</p>
                <p id="problem">در صورتیکه مشکل شما نیاز به پیگیری و پاسخ دارد لطفا از طریق پنل کاربری تیکت بزنید .</p>
                <div id="nameUndNumber">
                <div className="containerName">
                    <div className="name">
                    <i class="bi bi-person-fill"></i>
                    <p>نام و نام خانوادگی</p>
                    </div>
                    <input id="inputName" type="text" />
                </div>
                <div className="containerNumber">
                    <div className="number">
                    <i class="bi bi-phone"></i>
                    <p> شماره تماس</p>
                    </div>
                    <input id="inputNumber" type="text" />
                </div>
                </div>
                <div className="containerEmail">
                    <div className="email">
                    <i class="bi bi-envelope"></i>
                    <p>  ایمیل</p>
                    </div>
                    <input id="inputEmail" type="text" />
                </div>
                <div className="containerTitle">
                    <div className="title">
                    <i class="bi bi-sticky"></i>
                    <p> عنوان</p>
                    </div>
                    <input id="inputTitle" type="text" />
                </div>
                <div className="containerDescription">
                    <div className="description">
                    <i class="bi bi-card-text"></i>
                    <p>  توضیحات</p>
                    </div>
                    <input id="inputDescription" type="text" />
                </div>
                <div id="buttonForm"><button>ارسال پیام</button></div>
                
        </div>
        </div>
        </>
    )
}
export default ContactUs;
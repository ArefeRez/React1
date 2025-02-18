import ContactCard from "./ContactCard";
import "./ContactUs.css";
import { use, useEffect, useState } from "react";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    id: 0,
    title: "فرم تماس با ما ",
    number: "",
    email: "",
    addrres: "",
    name: "",
  });

  useEffect(() => {
    alert(formData.title);
  }, [formData]);
  const arrayList = [
    {
      id: 1,
      title: "راه های ارتباطی ",
      number: "تلفن : 02188454816 - 02191303737",
      email: "ایمیل : info@TopLearn.com",
      addrres: "آدرس : تهران،خیابان شریعتی ،خیابان ملک ، بن بست ایرانیاد ،پ ۱",
      name: "",
    },
    {
      id: 2,
      title: "مدیر آموزش ",
      number: "تلفن : 09126700311",
      email: "ایمیل : iman@madaeny.com",
      addrres: "",
      name: "نام و نام خانوادگی : ایمان مدائنی",
    },
    {
      id: 3,
      title: "مدیر موسسه",
      number: "تلفن : 09356700382",
      email: "",
      addrres: "",
      name: "نام و نام خانوادگی : حمیدرضا رضا",
    },
  ];
  return (
    <>
      <div className="container">
        <div id="containerContact">
          {arrayList.map((card, index) => {
            return (
              <ContactCard
                title={card.title}
                address={card.addrres}
                email={card.email}
                name={card.name}
                number={card.number}
                click={() => {
                  setFormData(card);
                }}
              />
            );
          })}
        </div>
        <div className="containerForm">
          <p id="pTitle"> {formData.title}</p>
          <p id="problem">
            در صورتیکه مشکل شما نیاز به پیگیری و پاسخ دارد لطفا از طریق پنل
            کاربری تیکت بزنید .
          </p>
          <div id="nameUndNumber">
            <div className="containerName">
              <div className="name">
                <i class="bi bi-person-fill"></i>
                <p>نام و نام خانوادگی</p>
              </div>
              <input value={formData.name} id="inputName" type="text" />
            </div>
            <div className="containerNumber">
              <div className="number">
                <i class="bi bi-phone"></i>
                <p> شماره تماس</p>
              </div>
              <input value={formData.number} id="inputNumber" type="text" />
            </div>
          </div>
          <div className="containerEmail">
            <div className="email">
              <i class="bi bi-envelope"></i>
              <p> ایمیل</p>
            </div>
            <input value={formData.email} id="inputEmail" type="text" />
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
              <p> توضیحات</p>
            </div>
            <input value={formData.addrres} id="inputDescription" type="text" />
          </div>
          <div id="buttonForm">
            <button>ارسال پیام</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;

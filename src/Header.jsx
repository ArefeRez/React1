import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="containerHeader">
        <div className="Header">
          <div>
            <img
              id="logoHeader"
              alt="تاپ لرن"
              className=""
              src="https://toplearn.com/Site/images/logo.svg?v=2&v=zjoiRpmC09IkkzqUJsClbhkaYu4GLxaP4j0XODEc3ec"
            />
          </div>
          <div>
            <ul className="ulHeader">
              <li>آخرین دوره ها</li>
              <li>تخفیفات روزانه</li>
              <li>بلاگ</li>
              <li>فرصت های شغلی</li>
              <li>همکاری با تاپ لرن</li>
              <li>مشاوره و رفع اشکال آنلاین</li>
              <li>لینک های مفید</li>
              <Link to={'/contactus'}>تماس با ما</Link>
            </ul>
          </div>
          <div className="registration">
            <i class="bi bi-person"></i>
            <a>ورود / ثبت نام</a>
          </div>
        </div>
        <h2 id="h2-1">خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن</h2>
        <h2 id="h2-2">با کمترینــــ هزینه خودت حرفه ایــــ یاد بگیـر</h2>
        <input type="serch" placeholder="چی می خوای یاد بگیری ؟" />
        <div className="imgsHeader">
          <div>
            <img src="https://toplearn.com/Site/images/stat-time.svg" alt="" />
            <p>487,282</p>
            <p id="p2">دقیقه آموزش</p>
          </div>
          <div>
            <img
              src="https://toplearn.com/Site/images/stat-teacher.svg"
              alt=""
            />
            <p>202</p>
            <p id="p2">مدرس مجرب</p>
          </div>
          <div>
            <img
              src="https://toplearn.com/Site/images/stat-student.svg"
              alt=""
            />
            <p>520,369</p>
            <p id="p2">نفر دانشجو</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

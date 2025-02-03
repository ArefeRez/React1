import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
    <div>
      <img
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
          <li>تماس با ما</li>
        </ul>
        </div>
          <div className="registration">
          <i class="bi bi-person"></i>
          <a>ورود / ثبت نام</a>
        </div>
        </div>
  );
};
export default Header;

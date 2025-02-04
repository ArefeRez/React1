import "./Footer.css";
const Footer= () => {
    return(
        <>
        <div className="footer">
            <div id="inputs">
            <div className="inputFooter">
                <input id="input1" type="text" placeholder="شماره موبایل شما"/>
                <input id="input2" type="text" placeholder="پست الکترونیکی شما"/>
                <button>عضویت در خبرنامه</button>
            </div>
            <div className="logo">
                <img id="img1" src="https://Trustseal.eNamad.ir/logo.aspx?id=316455&Code=YbUg0WEEsKYBobaxdp5N" alt="" />
                <img id="img2" src="https://Trustseal.eNamad.ir/logo.aspx?id=316455&Code=YbUg0WEEsKYBobaxdp5N" alt="" />
            </div>
            </div>
            <div className="ulFooter">
                <div>
        <ul>
            <li><a href="#">مرجع تخصصی برنامه نویسان</a></li>
            <li><a href="#">آموزشگاه برنامه نویسان</a></li>
            <li><a href="#"> قالب رایگان</a></li>
            <li><a href="#">سفارش پروژه</a></li>
            <li><a href="#">گت ورک و کسب درآمد </a></li>
            <li><a href="#">موتور جستجو</a></li>
            <li><a href="#"> لرن بای</a></li>
            <li><a href="#">قوانین سایت</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">سوالات متداول</a></li>
            <li><a href="#">فاماسرور </a></li>
        </ul>
        </div>
        <div className="icons">
        <i class="bi bi-instagram"></i>
    <i class="bi bi-telegram"></i>
    </div>
    </div>
        </div>
        <p id="pFooter">تمامی حقوق مادی و معنوی این سایت متعلق به تاپ لرن می باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد</p>
    </>
    )
}
export default Footer;
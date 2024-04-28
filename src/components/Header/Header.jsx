import style from "./header.module.css"
import logo from "../../assets/img/logo.png"
import avatar from "../../assets/img/avatar.png"
import { useContext } from "react";
import { appContext } from "../../App";
function Header() {
    const {dakTheme , setDarkTheme} = useContext(appContext);
    return (
        <div className={style.container}>
            <img className={style.logo} src={logo} alt="" />
            <div className={style.menu}>
                <div className={style.item}>
                    <p>بازی‌ها</p>
                </div>
                <div className={style.item}>
                    <p>برنامه‌ها</p>
                </div>
                <div className={style.item}>
                    <p>بهترین‌ها</p>
                </div>
                <div className={style.item}>
                    <p>اخبار</p>
                </div>
            </div>
            <div className={style.profile}>
                <img src={avatar} alt="" />
            </div>
            <div onClick={() => setDarkTheme((prev) => !prev)} className={style.themeChangeBtn}></div>
        </div>
    );
}

export default Header;
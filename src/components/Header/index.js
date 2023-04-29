import styles from "./Header.module.scss";
import Button from "../Button";
import Logo from "../../assets/logo.png";

function Header() {
    return <div className={styles["wrapper"]}>
        <div className={styles["logo-container"]}>
            <img src={Logo} alt={"logo"} />
        </div>
        <div className={styles["menu-container"]}>
            <div className={styles["menu-wrapper"]}>
                <div className={styles["nav-bar"]}>
                    <Button href="/#about">Giới thiệu</Button>
                    <Button href="/#leader">Lãnh đạo</Button>
                    <Button href="/#member">Thành viên</Button>
                    <Button href="/#tool">Công cụ</Button>
                    <Button href="/#contact">Liên hệ</Button>
                </div>
                <div className={styles["canvas-menu"]}>
                    <i className="fi fi-rr-apps" onClick={() => {
                        const menuList = document.querySelector(styles[".menu-list"]);
                        console.log(menuList)
                        menuList.classList.toggle(styles[".closing"]);}}>
                    </i>
                    <div className={styles["menu-list"] + " " + styles["closing"]}>
                        <a href="/#about">Giới thiệu</a>
                        <a href="/#leader">Lãnh đạo</a>
                        <a href="/#member">Thành viên</a>
                        <a href="/#tool">Công cụ</a>
                        <a href="/#contact">Liên hệ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Header;
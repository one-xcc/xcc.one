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
                    <Button href="/#pioneer">Tiên phong</Button>
                    <Button href="/#member">Thành viên</Button>
                    <Button href="/#tool">Công cụ</Button>
                    <Button href="/#contact">Liên hệ</Button>
                </div>
                <div className={styles["canvas-menu"]}>
                    <i className="fi fi-rr-apps" onClick={() => {
                        const menuList = document.querySelector("." + styles["menu-list"]);
                        menuList.classList.toggle(styles["closing"]);}}>
                    </i>
                    <div className={styles["menu-list"] + " " + styles["closing"]}>
                        <a onClick={e => e.target.parentNode.classList.add(styles["closing"])} href="/#about">Giới thiệu</a>
                        <a onClick={e => e.target.parentNode.classList.add(styles["closing"])} href="/#pioneer">Lãnh đạo</a>
                        <a onClick={e => e.target.parentNode.classList.add(styles["closing"])} href="/#member">Thành viên</a>
                        <a onClick={e => e.target.parentNode.classList.add(styles["closing"])} href="/#tool">Công cụ</a>
                        <a onClick={e => e.target.parentNode.classList.add(styles["closing"])} href="/#contact">Liên hệ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Header;
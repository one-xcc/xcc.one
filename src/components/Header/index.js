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
                <Button href="/#about">Giới thiệu</Button>
                <Button href="/#leader">Lãnh đạo</Button>
                <Button href="/#member">Thành viên</Button>
                <Button href="/#tool">Công cụ</Button>
                <Button href="/#contact">Liên hệ</Button>
            </div>
        </div>
    </div>
}

export default Header;
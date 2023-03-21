import styles from "./Header.module.scss";

function Header() {
    return <div className={styles["wrapper"]}>
        <div className={styles["logo-container"]}>
            <h1>Logo</h1>
        </div>
        <div className={styles["menu-container"]}>
            <div className={styles["menu-wrapper"]}>
                <a href="/#about" className={styles["menu-item"]}>Giới thiệu</a>
                <a href="/#leader" className={styles["menu-item"]}>Lãnh đạo</a>
                <a href="/#member" className={styles["menu-item"]}>Thành viên</a>
                <a href="/#tool" className={styles["menu-item"]}>Công cụ</a>
                <a href="/#contact" className={styles["menu-item"]}>Liên hệ</a>
            </div>
        </div>
    </div>
}

export default Header;
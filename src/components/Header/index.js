import styles from "./Header.module.scss";

function Header() {
    return <div className={styles["wrapper"]}>
        <div className={styles["logo-container"]}>
            <h1>Logo</h1>
        </div>
        <div className={styles["menu-container"]}>
            <div className={styles["menu-wrapper"]}>
                <div className={styles["menu-item"]}>Menu 1</div>
                <div className={styles["menu-item"]}>Menu 1</div>
                <div className={styles["menu-item"]}>Menu 1</div>
            </div>
        </div>
    </div>
}

export default Header;
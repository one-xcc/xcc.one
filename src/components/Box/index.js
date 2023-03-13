import styles from "./Box.module.scss";

function Box({children}) {
    return <div className={styles["wrapper"]}>
        {children}
    </div>
}

export default Box;
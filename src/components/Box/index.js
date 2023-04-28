import styles from "./Box.module.scss";

function Box({className, children}) {
    return <div className={styles["wrapper"] + " " + styles[className]}>
        {children}
    </div>
}

export default Box;
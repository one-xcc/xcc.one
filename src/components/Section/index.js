import styles from "./Section.module.scss";

function Section(props) {
    return <div id={props.id} className={styles["wrapper"]}>
        <div className={styles["title"]}>
            <h1>{props.sec.title}</h1>
            <h2>{props.sec.subtitle}</h2>
        </div>

        <div className={styles["content"]}>
            {props.children}
        </div>
    </div>
}

export default Section;
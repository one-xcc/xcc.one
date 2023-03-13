import styles from "./Body.module.scss";
import Section from "../Section";

function Body() {
    const sections = [
        {title: "A", logo: ""},
    ]

    return <div className={styles["wrapper"]}>
        <Section />
        <Section />
        <Section />
    </div>
}

export default Body;
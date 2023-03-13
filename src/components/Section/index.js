import styles from "./Section.module.scss";
import Box from "../Box";

function Section() {
    return <div className={styles["wrapper"]}>
        <div className={styles["title"]}>
            <h1>Title</h1>
            <h2>This is title</h2>
        </div>

        <div className={styles["content"]}>
            <Box />
            <Box />
            <Box />
        </div>
    </div>
}

export default Section;
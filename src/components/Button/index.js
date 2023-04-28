import styles from "./Button.module.scss";

function Button({active = false,
                    href,
                    onClick,
                    children
                }) {
    let myStyles = styles["button"];
    let Comp = "button";
    const props = {onClick}

    if (href) {
        props.href = href;
        Comp = "a";
    }

    if (active) myStyles += " " + styles["active"];

    return <Comp className={myStyles} {...props}>
        {children}
    </Comp>
}

export default Button;
import styles from "./Body.module.scss";
import buttonStyles from "../Button/Button.module.scss";
import Section from "../Section";
import Box from "../Box";
import VietNamNet from "../../assets/vietnam-network.png";
import StarBlueLogo from "../../assets/leaders/starblue-logo.png";
import CrowdfundingVNLogo from "../../assets/members/crowdfunding-vn-logo.png";
import xMailLogo from "../../assets/tools/xMail-logo.png";
import xNoteLogo from "../../assets/tools/xNote-logo.png";
import xURLLogo from "../../assets/tools/xURL-logo.png";
import Button from "../Button";
import {useState} from "react";

function Body() {
    const aboutDetails = [
        "We connect members together in cooperation on market, technology, knowledge, … to promote mutual development in multi-fields. ONE XCC Network aims at the common development of the nation, the common prosperity of the country.",
        "We connect ...",
        "We connect members ..."
    ]

    const [detail, setDetail] = useState(aboutDetails[0]);

    const sections = {
        about: {title: "Giới thiệu", subtitle: "Một mạng lưới nơi tất cả là một"},
        leader: {title: "Lãnh đạo", subtitle: "Ngôi sao tiên phong, định hình tương lai"},
        member: {title: "Thành viên", subtitle: "Mạng lưới những vì tinh tú"},
        tool: {title: "Công cụ", subtitle: "Hỗ trợ tốt hơn bao giờ hết"},
        contact: {title: "Liên hệ", subtitle: "Gia nhập mạng lưới của chúng ta"},
    }

    const leadersLogo = [<Box className={"img-in"}>{<a href={"https://starbluec.co"}><img src={StarBlueLogo} alt={"StarBlue logo"} /></a>}</Box>]
    const membersLogo = [<Box className={"img-in"}>{<a href={"https://cfv.xcc.one"}><img src={CrowdfundingVNLogo} alt={"Crowdfunding VN logo"} /></a>}</Box>]
    const toolsLogo = [
        <Box className={"img-in"}>{<a href={"https://m.xcc.one"}><img src={xMailLogo} alt={"xMail logo"} /></a>}</Box>,
        <Box className={"img-in"}>{<a href={"https://n.xcc.one"}><img src={xNoteLogo} alt={"xNote logo"} /></a>}</Box>,
        <Box className={"img-in"}>{<a href={"https://u.xcc.one"}><img src={xURLLogo} alt={"xURL logo"} /></a>}</Box>
    ]

    function setActiveBtn(e) {
        const btns = e.target.parentNode.querySelectorAll("Button");

        btns.forEach((btn) => {
            btn.classList.remove(buttonStyles["active"]);
        })
        e.target.classList.add(buttonStyles["active"]);
    }

    const aboutContent = <div className={styles["about-wrapper"]}>
        <div className={styles["about-details"]}>
            <div className={styles["about-bar"]}>
                <Box>
                    <Button active={true} onClick={(e) => {
                        setDetail(aboutDetails[0]);
                        setActiveBtn(e);}}>Vision
                    </Button>
                    <Button onClick={(e) => {
                        setDetail(aboutDetails[1]);
                        setActiveBtn(e);}}>Mission
                    </Button>
                    <Button onClick={(e) => {
                        setDetail(aboutDetails[2]);
                        setActiveBtn(e);}}>Core values
                    </Button>
                </Box>
            </div>
            <Box>
                <p>{detail}</p>
            </Box>
        </div>
        <div className={styles["about-image"]}>
            <img src={VietNamNet} alt={"About illustration"}/>
        </div>
    </div>

    const contactContent = <div className={styles["contact-wrapper"]}>
        <div className={styles["contact-info"]}>
            <Box>
                <div>
                    <h2>ONE XCC Network</h2>
                    <p>ONE XCC Network is a network connecting businesses in many fields in Vietnam.</p>
                    <h3>Contact us</h3>
                    <p>
                        📍 <b>Address</b>: Now is online <br/>
                        📞 <b>Tel</b>: Now is online <br/>
                        📨 <b>Email</b>: Now is online<br/>
                        🌐 <b>Website</b>: xcc.one</p>
                </div>
            </Box>
        </div>
        <div className={styles["social-info"]}>
            <Box className={"box-1on3"}>
                <i className="fi fi-brands-facebook"></i>
            </Box>
            <Box className={"box-1on3"}>
                <i className="fi fi-brands-youtube"></i>
            </Box>
            <Box className={"box-1on3"}>
                <i className="fi fi-brands-github"></i>
            </Box>
        </div>
    </div>

    return <div className={styles["wrapper"]}>
        <Section id={"about"} sec={sections.about}>{aboutContent}</Section>
        <Section id={"leader"} sec={sections.leader}>{leadersLogo}</Section>
        <Section id={"member"} sec={sections.member}>{membersLogo}</Section>
        <Section id={"tool"} sec={sections.tool}>{toolsLogo}</Section>
        <Section id={"contact"} sec={sections.contact}>{contactContent}</Section>
    </div>
}

export default Body;
import styles from "./Body.module.scss";
import Section from "../Section";
import Box from "../Box";
import VietNamNet from "../../assets/vietnam-network.png";
import StarBlueLogo from "../../assets/leaders/starblue-logo.png";
import CrowdfundingVNLogo from "../../assets/members/crowdfunding-vn-logo.png";
import xMailLogo from "../../assets/tools/xMail-logo.png";
import xNoteLogo from "../../assets/tools/xNote-logo.png";
import xSurveyLogo from "../../assets/tools/xSurvey-logo.png";
import xURLLogo from "../../assets/tools/xURL-logo.png";

function Body() {
    const sections = {
        about: {title: "Giới thiệu", subtitle: "Một mạng lưới nơi tất cả là một"},
        leader: {title: "Lãnh đạo", subtitle: "Ngôi sao tiên phong, định hình tương lai"},
        member: {title: "Thành viên", subtitle: "Mạng lưới những vì tinh tú"},
        tool: {title: "Công cụ", subtitle: "Hỗ trợ tốt hơn bao giờ hết"},
        contact: {title: "Liên hệ", subtitle: "Gia nhập mạng lưới của chúng ta"},
    }

    const leadersLogo = [<Box>{<img src={StarBlueLogo} alt={"StarBlue logo"} />}</Box>]
    const membersLogo = [<Box>{<img src={CrowdfundingVNLogo} alt={"Crowdfunding VN logo"} />}</Box>]
    const toolsLogo = [
        <Box>{<img src={xMailLogo} alt={"xMail logo"} />}</Box>,
        <Box>{<img src={xNoteLogo} alt={"xNote logo"} />}</Box>,
        <Box>{<img src={xSurveyLogo} alt={"xSurvey logo"} />}</Box>,
        <Box>{<img src={xURLLogo} alt={"xURL logo"} />}</Box>
    ]

    const aboutContent = <div className={styles["about-wrapper"]}>
        <div className={styles["about-details"]}>
            <Box>
                <p>We connect members together in cooperation on market, technology, knowledge, … to promote mutual development in multi-fields. ONE XCC Network aims at the common development of the nation, the common prosperity of the country.</p>
            </Box>
        </div>
        <div className={styles["about-image"]}>
            <img src={VietNamNet} alt={"About illustration"}/>
        </div>
    </div>

    const contactContent = <div>
        <Box>
            <div className={styles["contact-info"]}>
                <h2>ONE XCC Network</h2>
                <p>ONE XCC Network is a network connecting businesses in many fields in Vietnam</p>
                <p><br>Address</br>: Now is online</p>
                <p><br>Tel</br>: Now is online</p>
                <p><br>Email</br>: Now is online</p>
                <p><br>Website</br>: xcc.one</p>
            </div>
        </Box>
        <div className={styles["social-info"]}>
            <Box>A</Box>
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
import styles from "./Body.module.scss";
import buttonStyles from "../Button/Button.module.scss";
import Section from "../Section";
import Box from "../Box";
import VietNamNet from "../../assets/vietnam-network.png";
import StarBlueLogo from "../../assets/pioneers/starblue-logo.png";
import CrowdfundingVNLogo from "../../assets/members/crowdfunding-vn-logo.png";
import xMailLogo from "../../assets/tools/xMail-logo.png";
import xNoteLogo from "../../assets/tools/xNote-logo.png";
import xURLLogo from "../../assets/tools/xURL-logo.png";
import Button from "../Button";
import {useState} from "react";

function Body() {
    const aboutDetails = [
        "Với tầm nhìn đến năm 2030, ONE XCC Network mong muốn trở thành một mạng lưới đa ngành hàng đầu tại khu vực, được tín nhiệm và gắn liền với sự phát triển bền vững của đất nước và cộng đồng.",
        "Để đạt được mục tiêu, ONE XCC Network đã xây dựng một sứ mệnh rõ ràng: kết nối các thành viên trong mạng lưới và phát triển cùng nhau trên nhiều lĩnh vực, tạo ra giá trị đích thực cho khách hàng và cộng đồng.",
        "ONE XCC Network tin rằng, sự thành công của mạng lưới phụ thuộc vào khả năng tương tác và hợp tác [1] của các thành viên. Đó là lý do tại sao, hợp tác là giá trị cốt lõi của mạng lưới này. Hợp tác giúp tạo ra mối quan hệ bền vững với khách hàng, đối tác và cộng đồng để đạt được sự phát triển chung. Đổi mới [2] là một giá trị quan trọng khác của ONE XCC Network. mạng lưới luôn sáng tạo và đổi mới trong hoạt động kinh doanh để đáp ứng nhu cầu thị trường và tạo ra giá trị đích thực. Với việc áp dụng công nghệ tiên tiến và các phương pháp quản lý hiện đại, ONE XCC Network hy vọng sẽ trở thành một mạng lưới đa ngành hàng đầu tại khu vực. Trách nhiệm xã hội [3] cũng là một giá trị cốt lõi quan trọng của ONE XCC Network. mạng lưới đảm bảo tuân thủ đạo đức và trách nhiệm xã hội, đóng góp tích cực cho sự phát triển bền vững của đất nước và cộng đồng. Với việc thực hiện các chương trình đóng góp xã hội, ONE XCC Network mong muốn góp phần xây dựng một xã hộ."
    ];

    const [detail, setDetail] = useState(aboutDetails[0]);

    const sections = {
        about: {title: "Giới thiệu", subtitle: "Một mạng lưới nơi tất cả là một"},
        pioneer: {title: "Tiên phong", subtitle: "Ngôi sao tiên phong, định hình tương lai"},
        member: {title: "Thành viên", subtitle: "Mạng lưới những vì tinh tú"},
        tool: {title: "Công cụ", subtitle: "Hỗ trợ tốt hơn bao giờ hết"},
        contact: {title: "Liên hệ", subtitle: "Gia nhập mạng lưới của chúng ta"},
    }

    const pioneersLogo = [<Box className={"img-in"}>{<a href={"https://starbluec.co"}><img src={StarBlueLogo} alt={"StarBlue logo"} /></a>}</Box>]
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
                        setActiveBtn(e);}}>Tầm nhìn
                    </Button>
                    <Button onClick={(e) => {
                        setDetail(aboutDetails[1]);
                        setActiveBtn(e);}}>Sứ mệnh
                    </Button>
                    <Button onClick={(e) => {
                        setDetail(aboutDetails[2]);
                        setActiveBtn(e);}}>Giá trị cốt lõi
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
                        📨 <b>Email</b>: contact@xcc.one<br/>
                        🌐 <b>Website</b>: xcc.one
                    </p>
                </div>
            </Box>
        </div>
        <div className={styles["social-info"]}>
            <Box className={"box-1on3"}>
                <a href={"https://facebook.com"}><i style={{color: "#4267B2"}} className="fi fi-brands-facebook"></i></a>
            </Box>
            <Box className={"box-1on3"}>
                <a href={"https://youtube.com"}><i style={{color: "#FF0000"}} className="fi fi-brands-youtube"></i></a>
            </Box>
            <Box className={"box-1on3"}>
                <a href={"https://github.com"}><i style={{color: "#BF5B94"}} className="fi fi-brands-github"></i></a>
            </Box>
        </div>
    </div>

    return <div className={styles["wrapper"]}>
        <Section id={"about"} sec={sections.about}>{aboutContent}</Section>
        <Section id={"pioneer"} sec={sections.pioneer}>{pioneersLogo}</Section>
        <Section id={"member"} sec={sections.member}>{membersLogo}</Section>
        <Section id={"tool"} sec={sections.tool}>{toolsLogo}</Section>
        <Section id={"contact"} sec={sections.contact}>{contactContent}</Section>
        <div id={styles["copyright"]}>© 2023 ONE XCC Network. All rights reversed.</div>
    </div>
}

export default Body;
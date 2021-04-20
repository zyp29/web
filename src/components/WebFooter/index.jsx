import "./index.less";
import footerLogo from "../../assets/footerLogo.png";

const WebFooter = () => {
    return (
        <div className="webFooter">
            <img src={footerLogo} alt="logo" />
            © Copyright - Columbia China&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备15005946号
        </div>
    )
}

export default WebFooter;
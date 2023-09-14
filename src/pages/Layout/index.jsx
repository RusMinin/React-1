import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import s from "./styles.module.css";

const Layout = (props) => {
    return (
        <div className={s.appWrapper}>
            <Header />
            <Navbar />
            <div className={s.appWrapperContent}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
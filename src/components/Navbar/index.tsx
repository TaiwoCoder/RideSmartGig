import logo from "../../assets/logo-ride.jpg";
import SmallBtn from "../buttons/smallBtn";
import NavItem from "./NavItem";
import styles from "./Navbar.module.scss";


const Navbar = ()=>{
    return (
        <nav className={styles.nav} >
            <div className={styles.nav_links} >
                <img src={logo} alt="logo" className={styles.nav_logo} />
                <NavItem link="" text="Home" />
                <NavItem link="" text="Legal Info" />
                <NavItem link="" text="Contact Us" />
                <NavItem link="" text="About" />
                <NavItem link="" text="FAQ" />
            </div>
            <div >
                <SmallBtn text="Login" color="blue" clicked={()=>{}} />
                <SmallBtn text="Enroll" color="red" clicked={()=>{}} />
            </div>
        </nav>
    )
}

export default Navbar;
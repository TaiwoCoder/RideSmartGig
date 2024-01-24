import Navbar from "../Navbar";
import More from "../more";
import styles from "./hero.module.scss";

const Hero = ()=>{

    return(
        <section className={styles.hero} >
            <Navbar/>
            <input placeholder="Search" className={styles.hero_search} />
            <div className={styles.hero_more} >
                <More text="Apparel" />
                <More text="Season schedule" />
                <More text="General information" />
                <More text="Specials" />
                <More text="Policies" />
                <More text="School structure" />
                <More text="Garage and canopies" />
                <More text="Event requirement" />
                <More text="The tracks" />
                <More text="Checklists" />
                <More text="Inspanish" />
            </div>
        </section>
    )
}

export default Hero;
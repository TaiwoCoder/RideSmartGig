import styles from './btn.module.scss';
const SmallBtn = ({text, color}: {text: string, color: string})=>{

    return(
        <button className={styles.btn} style={{backgroundColor: color}} >
            {text}
        </button>
    )
}

export default SmallBtn;
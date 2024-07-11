import styles from "./Button.module.css"
const Button = ({text,variant ='default',margin},) => {
    const computedClass = `${styles.btn} ${styles[`btn-${variant}`]}`;
  return (
    <button className={computedClass} style={{margin:margin }}>{text} </button>
  )
}

export default Button
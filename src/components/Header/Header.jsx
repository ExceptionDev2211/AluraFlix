import Button from "../Button/Button"
import styles from "./Header.module.css"
import { Link } from 'react-router-dom';
const Header = ({variantA,variantB, backgroundC}) => {
  return (
    <header className={`${styles.head}`} style={{ backgroundColor: backgroundC }}>
        <img src="Imagenes/LogoMain.png" alt=""/>
        <Link to="/" style={{marginLeft:"auto"}}>
            <Button  variant={variantA} text ="Home"/>
       </Link>
       <Link to="/addVideo">
            <Button  variant={variantB} text ="Nuevo video"/>
       </Link>
    </header>
  )
}

export default Header
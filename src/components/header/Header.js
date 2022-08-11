import LogoHeader from '../../assets/logo-header.svg'
import styles from './Header.module.css'

function Header(){
    return (
    <div className={styles.logo_header}><img src={LogoHeader} alt='Logo'></img></div>
    )
}
export default Header
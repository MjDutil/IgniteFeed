import Styles from'./Header.module.css'
import Logo from '../assets/logo.png'

export function Header() {
    return (
        <header className={Styles.header}>
            <img src={Logo} alt="" />
            <strong>Ignite Feed</strong>
        </header>
    )
}



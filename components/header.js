import Logo from '@/components/logo'
import Nav from '@/components/nav'
import styles from '@/styles/header.module.scss'

export default function Header() {
    return (
        <header>
            <div className={styles.flexContainer}>
                <Logo boxOn />
                <Nav />
            </div>
        </header>
    );
}

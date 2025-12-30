import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`${styles.content} container`}>
                <div className={styles.brand}>
                    <span className={styles.logo}>Sammunat</span>
                    <p className={styles.tagline}>
                        Building quality software for businesses that care about their craft.
                    </p>
                </div>

                <nav className={styles.links}>
                    <h4 className={styles.linksTitle}>Quick Links</h4>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#cta">Contact</a></li>
                    </ul>
                </nav>

                <div className={styles.contact}>
                    <h4 className={styles.linksTitle}>Contact</h4>
                    <p>contact@sammaut.com</p>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>&copy; {currentYear} Sammunat LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

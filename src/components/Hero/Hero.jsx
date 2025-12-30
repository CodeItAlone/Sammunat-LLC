import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`${styles.content} container`}>
                <h1 className={styles.title}>
                    Build Better Products <br />
                    <span className={styles.highlight}>Faster Than Ever</span>
                </h1>
                <p className={styles.subtitle}>
                    We help startups and enterprises ship quality software with modern
                    development practices. From concept to deployment, we handle it all.
                </p>
                <div className={styles.actions}>
                    <a href="#cta" className={styles.primaryBtn}>
                        Start Your Project
                    </a>
                    <a href="#features" className={styles.secondaryBtn}>
                        Learn More
                    </a>
                </div>
            </div>
            <div className={styles.pattern}></div>
        </section>
    );
}

export default Hero;

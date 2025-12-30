import styles from './CTA.module.css';

function CTA() {
    return (
        <section id="cta" className={styles.cta}>
            <div className={`${styles.content} container`}>
                <h2 className={styles.title}>Ready to Build Something Great?</h2>
                <p className={styles.subtitle}>
                    Let us discuss your project and see how we can help bring your vision to life.
                    No commitment, just a conversation.
                </p>
                <a href="mailto:contact@sammunat.com" className={styles.button}>
                    Get in Touch
                </a>
            </div>
        </section>
    );
}

export default CTA;

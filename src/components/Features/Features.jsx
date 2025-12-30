import styles from './Features.module.css';

const features = [
    {
        id: 1,
        title: 'Rapid Development',
        description: 'Ship features fast with our agile workflow. We iterate quickly and deliver working software every sprint.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Scalable Architecture',
        description: 'Built to grow with your business. Our solutions handle increased load without breaking a sweat.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Clean Code',
        description: 'Maintainable, well-documented code that your team can understand and extend without friction.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Reliable Support',
        description: 'Dedicated support throughout your project lifecycle. We are partners in your success, not just vendors.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
    },
];

function Features() {
    return (
        <section id="features" className={styles.features}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Work With Us</h2>
                    <p className={styles.subtitle}>
                        We combine technical expertise with practical business understanding
                        to deliver solutions that matter.
                    </p>
                </div>
                <div className={styles.grid}>
                    {features.map((feature) => (
                        <article key={feature.id} className={styles.card}>
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;

import styles from '../components/PageStyles.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';

export const metadata = {
  title: 'About | TradingSignals',
  description: 'The activity is focused on the research, development, and ongoing refinement of quantitative strategies based on mathematical modeling, statistical analysis, and data-driven processes.',
};

export default function About() {
  return (
    <>
      {/* Header */}
      <section className={`${styles.pageHeader} ${styles.aboutBg}`}>
        <div className={styles.pageHeaderInner}>
          <span className="label">About</span>
          <h1>About</h1>
          <p>
            The activity is focused on the research, development, and ongoing refinement of 
            quantitative strategies based on mathematical modeling, statistical analysis, 
            and data-driven processes.
          </p>
          <p>
            The objective is to provide structured, systematic frameworks that enable 
            multi-instrument market exposure in a consistent and controlled manner.
          </p>
        </div>
      </section>

      {/* Operations */}
      <section className="section">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div className={styles.splitGrid}>
              <div>
                <span className="label">Operations</span>
                <h2>Operational Tools</h2>
                <p>
                  Strategies are made available as operational tools, which users deploy independently on their own trading accounts.
                </p>
                <p>
                  The company does not provide portfolio management, financial advisory, or brokerage services.
                </p>
                <p>
                  All operations are executed directly on the user&apos;s account through automated systems, ensuring full user control at all times.
                </p>
              </div>
              <div className={styles.abstractVisual}>
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="40" width="320" height="320" stroke="rgba(201,169,110,0.15)" strokeWidth="1"/>
                  <circle cx="200" cy="200" r="120" stroke="rgba(201,169,110,0.12)" strokeWidth="1"/>
                  <circle cx="200" cy="200" r="80" stroke="rgba(201,169,110,0.08)" strokeWidth="1"/>
                  <line x1="200" y1="40" x2="200" y2="360" stroke="rgba(201,169,110,0.06)" strokeWidth="1"/>
                  <line x1="40" y1="200" x2="360" y2="200" stroke="rgba(201,169,110,0.06)" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Role */}
      <section className="section section--alt">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="label">Scope</span>
              <h2>Role of the Company</h2>
              <p style={{ margin: '0 auto' }}>
                The role of the company is limited to:
              </p>
            </div>
          </SectionReveal>
          <div className={styles.cardGrid}>
            <SectionReveal delay={1}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>①</div>
                <h3>strategy design and development</h3>
              </div>
            </SectionReveal>
            <SectionReveal delay={2}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>②</div>
                <h3>model maintenance and refinement</h3>
              </div>
            </SectionReveal>
            <SectionReveal delay={3}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>③</div>
                <h3>technical support for setup and connectivity</h3>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Approach & Disclaimer */}
      <section className="section">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div className={styles.pullQuote} style={{ marginBottom: '48px' }}>
              <p>
                The approach is based on structure, discipline, and repeatability, rather than discretionary decision-making or market prediction.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: 'var(--steel)', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
                The strategies are intended as operational tools and do not constitute investment recommendations.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaBand}`}>
        <SectionReveal>
          <div className={styles.ctaBandInner}>
            <h2>Request Access to Our Strategies</h2>
            <Button href="/access">Request Access</Button>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}

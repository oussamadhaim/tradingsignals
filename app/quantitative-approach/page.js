import styles from '../components/PageStyles.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';

export const metadata = {
  title: 'Quantitative Approach | TradingSignals',
  description: 'The approach is based on the development and application of systematic strategies built on mathematical modeling, statistical analysis, and data-driven research.',
};

export default function QuantitativeApproach() {
  return (
    <>
      <section className={`${styles.pageHeader} ${styles.quantitativeBg}`}>
        <div className={styles.pageHeaderInner}>
          <span className="label">Quantitative Approach</span>
          <h1>Quantitative Approach</h1>
          <p>
            The approach is based on the development and application of systematic 
            strategies built on mathematical modeling, statistical analysis, and 
            data-driven research.
          </p>
          <p>
            Rather than relying on interpretation or discretionary decision-making, 
            the process is designed to operate under defined, repeatable, and 
            measurable conditions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div className={styles.splitGrid}>
              <div>
                <span className="label">Structure</span>
                <h2>Model Design</h2>
                <p>
                  Each strategy is developed through structured modeling processes 
                  aimed at identifying specific market configurations.
                </p>
                <p>
                  These models are not intended to predict market direction, but to 
                  operate when predefined statistical conditions are met.
                </p>
              </div>
              <div className={styles.abstractVisual}>
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Abstract structural representation */}
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

      <section className="section section--alt">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <span className="label">Testing</span>
              <h2>Data and Validation</h2>
              <p>
                All strategies are analyzed using historical data and simulation 
                techniques to assess their behavior across different market environments.
              </p>
              <p>
                The focus is placed on consistency, robustness, and stability over 
                time, rather than isolated outcomes.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>⚙️</div>
                <h3>Systematic Execution</h3>
                <p>
                  Execution follows predefined rules embedded within the strategy logic.
                </p>
                <p>
                  This allows for a consistent and disciplined operational framework, 
                  independent of subjective interpretation.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🌐</div>
                <h3>Multi-Market and Multi-Instrument Capability</h3>
                <p>
                  The approach enables simultaneous operation across multiple 
                  instruments and markets.
                </p>
                <p>
                  This structure would be difficult to manage manually and requires 
                  automation to ensure consistency and scalability.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>💻</div>
                <h3>Role of Technology</h3>
                <p>
                  Automation is a central component of the approach.
                </p>
                <p>
                  Strategies are designed to be executed directly on the user&apos;s 
                  account through dedicated connection systems, ensuring operational continuity.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <span className="label">Innovation</span>
              <h2>Artificial Intelligence</h2>
              <p>
                Artificial intelligence is used as a supporting tool for data analysis 
                and model refinement.
              </p>
              <p>
                It does not replace the underlying methodological framework, which remains 
                grounded in structured quantitative processes.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className={`section ${styles.ctaBand}`}>
        <SectionReveal>
          <div className={styles.ctaBandInner}>
            <span className="label" style={{ marginBottom: '16px', display: 'inline-block' }}>Key Principle</span>
            <h2>
              The objective is not to forecast markets, but to operate within a 
              controlled framework when statistically relevant conditions arise.
            </h2>
            <div style={{ marginTop: '40px' }}>
              <Button href="/risk-management">Explore Risk Management</Button>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}

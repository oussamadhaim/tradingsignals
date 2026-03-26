import styles from '../components/PageStyles.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';

export const metadata = {
  title: 'Risk Management | TradingSignals',
  description: 'Risk is an inherent component of any market activity and cannot be eliminated. The approach is structured around managing risk through predefined rules, model design, and operational discipline.',
};

export default function RiskManagement() {
  return (
    <>
      <section className={`${styles.pageHeader} ${styles.riskBg}`}>
        <div className={styles.pageHeaderInner}>
          <span className="label">Risk Management</span>
          <h1>Risk Management</h1>
          <p>
            Risk is an inherent component of any market activity and cannot be eliminated.
          </p>
          <p>
            The approach is therefore structured around managing risk through 
            predefined rules, model design, and operational discipline.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div className={styles.splitGrid}>
              <div>
                <span className="label">Structure</span>
                <h2>Embedded Risk Structure</h2>
                <p>
                  Each strategy incorporates internal risk parameters, including 
                  exposure control, position sizing logic, and operational constraints.
                </p>
                <p>
                  These elements are defined at the model level and applied 
                  consistently through automated execution.
                </p>
              </div>
              <div className={styles.abstractVisual}>
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="40" y="40" width="320" height="320" stroke="rgba(201,169,110,0.15)" strokeWidth="1"/>
                  <path d="M40 360L160 200L240 280L360 40" stroke="rgba(201,169,110,0.4)" strokeWidth="2" strokeLinejoin="round"/>
                  <line x1="160" y1="200" x2="160" y2="360" stroke="rgba(201,169,110,0.1)" strokeWidth="1" strokeDasharray="4 4"/>
                  <line x1="240" y1="280" x2="240" y2="360" stroke="rgba(201,169,110,0.1)" strokeWidth="1" strokeDasharray="4 4"/>
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
              <span className="label">Diversification</span>
              <h2>Diversification Across Strategies</h2>
              <p>
                Risk is managed not only at the single strategy level, but also 
                through the use of multiple models operating across different 
                instruments and conditions.
              </p>
              <p>
                This contributes to reducing concentration and improving overall 
                structural balance.
              </p>
              <div className="divider" style={{ margin: '48px auto' }}></div>
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
                <h3>Systematic Discipline</h3>
                <p>
                  The absence of discretionary intervention ensures that strategies 
                  operate within their defined parameters.
                </p>
                <p>
                  This avoids deviations driven by emotional or subjective decision-making.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>⚖️</div>
                <h3>Leverage Considerations</h3>
                <p>
                  Where applicable, financial leverage may be used as part of the operational environment.
                </p>
                <p>
                  Leverage is treated as a technical component and not as an objective, 
                  and its impact depends on the user&apos;s account configuration.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📊</div>
                <h3>Monitoring and Adaptation</h3>
                <p>
                  Strategies are subject to ongoing observation and review to ensure 
                  alignment with their intended design.
                </p>
                <p>
                  Adjustments, where necessary, are applied within the structured 
                  framework of the models.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <span className="label">Control</span>
              <h2>User Control</h2>
              <p>
                All strategies are executed directly on the user&apos;s account.
              </p>
              <p>The user retains full control over:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  capital allocation
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  activation or deactivation of strategies
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  overall exposure
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className={`section ${styles.ctaBand}`}>
        <SectionReveal>
          <div className={styles.ctaBandInner}>
            <span className="label" style={{ marginBottom: '16px', display: 'inline-block' }}>Key Principle</span>
            <h2>
              The priority is not the maximization of short-term results, but 
              the preservation of consistency and structural coherence over time.
            </h2>
            <div style={{ marginTop: '40px' }}>
              <Button href="/who-its-for">Who We Serve</Button>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}

import styles from '../components/PageStyles.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';

export const metadata = {
  title: 'Thank You | TradingSignals',
  description: 'Your request has been successfully received.',
};

export default function ThankYou() {
  return (
    <>
      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <span className="label">Submission Complete</span>
          <h1>Preliminary Assessment Submitted</h1>
          <p>
            Your request has been successfully received.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <div className={styles.pullQuote} style={{ marginBottom: '48px' }}>
                <p>
                  The information provided will be reviewed as part of a preliminary compatibility assessment.
                </p>
              </div>
              <Button href="/">Return to Home</Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

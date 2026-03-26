import pageStyles from '../components/PageStyles.module.css';
import styles from './page.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';

export const metadata = {
  title: 'Access to Strategies | TradingSignals',
  description: 'Access to the strategies is reserved and subject to a preliminary assessment process. Strategies are provided as operational tools deployed on your own trading account.',
};

export default function Access() {
  return (
    <>
      <section className={pageStyles.pageHeader}>
        <div className={pageStyles.pageHeaderInner}>
          <span className="label">Access to Strategies</span>
          <h1>Access to Strategies</h1>
          <p>
            Access to the strategies is reserved and subject to a preliminary 
            assessment process.
          </p>
          <p>
            The strategies are provided as operational tools, which users deploy 
            and utilize directly on their own trading accounts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={styles.accessProcess}>
          <SectionReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="label">Operations</span>
              <h2>Operational model</h2>
            </div>
          </SectionReveal>
          <div className={styles.steps}>
            <SectionReveal delay={1}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <p>strategies are connected to the user&apos;s trading platform</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={2}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <p>execution is fully automated</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={3}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <p>full control of the account remains with the user</p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className={pageStyles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px' }}>
              <span className="label">Support</span>
              <h2>Technical support</h2>
              <p>Support is provided for:</p>
              <ul className={styles.supportList}>
                <li>setup and connection</li>
                <li>activation of the strategies</li>
                <li>technical functioning of the system</li>
              </ul>
              <p className={styles.supportDisclaimer}>
                No financial advice or discretionary management is provided.
              </p>
              <div className="divider"></div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section">
        <div className={pageStyles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px' }}>
              <span className="label">Economics</span>
              <h2>Economic Structure</h2>
              <p>
                Access to the strategies is based on a results-aligned model.
              </p>
              <div className={styles.economicHighlight}>
                No upfront fees are required for access to the strategies.
              </div>
              <p>
                Compensation, where applicable, is linked to the effective use of 
                the strategies and the outcomes generated, ensuring alignment of interests.
              </p>
              <p>
                This structure is designed to avoid fixed costs unrelated to actual 
                usage and to maintain a transparent framework between the parties.
              </p>
              <p className={styles.supportDisclaimer}>
                Specific economic terms are defined individually following the 
                preliminary assessment and compatibility evaluation.
              </p>
              <div className="divider"></div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className={styles.accessProcess}>
          <SectionReveal>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="label">Process</span>
              <h2>Access Process</h2>
            </div>
          </SectionReveal>
          <div className={styles.processSteps}>
            <SectionReveal delay={1}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>preliminary assessment</h3>
              </div>
            </SectionReveal>
            <SectionReveal delay={2}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>profile evaluation</h3>
              </div>
            </SectionReveal>
            <SectionReveal delay={3}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>introductory discussion</h3>
                <p>(if applicable)</p>
              </div>
            </SectionReveal>
            <SectionReveal delay={4}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>technical setup and activation</h3>
              </div>
            </SectionReveal>
          </div>
          <SectionReveal delay={5}>
            <div className={styles.processNote}>
              <p>Not all requests are accepted</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className={`section ${pageStyles.ctaBand}`}>
        <SectionReveal>
          <div className={pageStyles.ctaBandInner}>
            <h2>Begin the Assessment Process</h2>
            <p>
              Submit your information to initiate a confidential preliminary assessment.
            </p>
            <Button href="/contact">Request Access</Button>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}

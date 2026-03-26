import pageStyles from '../components/PageStyles.module.css';
import styles from '../components/LegalStyles.module.css';
import SectionReveal from '../components/SectionReveal';

export const metadata = {
  title: 'Privacy Policy | TradingSignals',
  description: 'Privacy Policy describing how personal data is collected, used, and protected by TradingSignals.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className={pageStyles.pageHeader}>
        <div className={pageStyles.pageHeaderInner}>
          <span className="label">Privacy</span>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy describes how personal data is collected, 
            used, and protected.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={styles.legalContent}>
          <SectionReveal>
            <h2>Data Collection</h2>
            <p>
              We may collect personal information voluntarily provided by users, 
              including but not limited to:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Contact details</li>
              <li>Information submitted through forms</li>
            </ul>

            <div className={styles.legalDivider}></div>

            <h2>Purpose of Data Processing</h2>
            <p>
              Personal data is collected and processed for the following purposes:
            </p>
            <ul>
              <li>Responding to inquiries</li>
              <li>Evaluating access requests</li>
              <li>Providing technical information and support</li>
              <li>Improving website functionality</li>
            </ul>

            <div className={styles.legalDivider}></div>

            <h2>Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to 
              protect personal data against unauthorized access, disclosure, or loss.
            </p>

            <h2>Data Sharing</h2>
            <p>
              Personal data is not sold or shared with third parties, except where 
              required by law or necessary for technical service provision.
            </p>

            <div className={styles.legalDivider}></div>

            <h2>User Rights</h2>
            <p>
              Users may request access to their personal data, correction, or 
              deletion at any time by contacting us.
            </p>

            <h2>Data Retention</h2>
            <p>
              Personal data is retained only for the time necessary to fulfill 
              the purposes for which it was collected.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

import pageStyles from '../components/PageStyles.module.css';
import styles from '../components/LegalStyles.module.css';
import SectionReveal from '../components/SectionReveal';

export const metadata = {
  title: 'Legal Disclaimer | TradingSignals',
  description: 'Legal disclaimer for TradingSignals. Information provided is for informational purposes only.',
};

export default function LegalDisclaimer() {
  return (
    <>
      <section className={pageStyles.pageHeader}>
        <div className={pageStyles.pageHeaderInner}>
          <span className="label">Legal</span>
          <h1>Legal Disclaimer</h1>
        </div>
      </section>

      <section className="section">
        <div className={styles.legalContent}>
          <SectionReveal>
            <p>
              The information provided on this website is for informational purposes 
              only and does not constitute, and should not be interpreted as, investment 
              advice, financial advice, trading advice, or any form of recommendation.
            </p>

            <p>
              The company does not provide portfolio management, financial advisory, 
              brokerage, or any regulated financial services.
            </p>

            <p>
              The strategies described are quantitative, rule-based systems made available 
              as operational tools, which users may choose to implement independently on 
              their own trading accounts.
            </p>

            <div className={styles.legalDivider}></div>

            <p>
              The company does not manage client funds and does not have access to 
              users&apos; trading accounts.
            </p>

            <p>
              All trading activity is executed directly by the user, or through automated 
              systems installed and controlled by the user on their own infrastructure.
            </p>

            <div className={styles.legalDivider}></div>

            <p>
              Trading in financial markets involves a high level of risk and may not be 
              suitable for all investors.
            </p>

            <p>
              The use of derivatives and financial leverage can amplify both gains and 
              losses. Users are solely responsible for evaluating their financial situation, 
              experience, and risk tolerance before engaging in any trading activity.
            </p>

            <p>
              No guarantee of performance or results is provided. Past performance, where 
              referenced, is not indicative of future results.
            </p>

            <div className={styles.legalDivider}></div>

            <p>
              The company makes no representations or warranties regarding the accuracy, 
              completeness, or reliability of any information provided.
            </p>

            <p>
              Users acknowledge that they are solely responsible for the use of any 
              strategies and for all trading decisions made on their accounts.
            </p>

            <p>
              By using this website and the provided strategies, users agree that the 
              company shall not be held liable for any direct or indirect losses arising 
              from the use of the information or systems provided.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

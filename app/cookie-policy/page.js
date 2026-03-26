import pageStyles from '../components/PageStyles.module.css';
import styles from '../components/LegalStyles.module.css';
import SectionReveal from '../components/SectionReveal';

export const metadata = {
  title: 'Cookie Policy | TradingSignals',
  description: 'Cookie Policy for TradingSignals. Information about how cookies are used on this website.',
};

export default function CookiePolicy() {
  return (
    <>
      <section className={pageStyles.pageHeader}>
        <div className={pageStyles.pageHeaderInner}>
          <span className="label">Cookies</span>
          <h1>Cookie Policy</h1>
          <p>
            This website uses cookies to enhance user experience and ensure 
            proper functionality.
          </p>
        </div>
      </section>

      <section className="section">
        <div className={styles.legalContent}>
          <SectionReveal>
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files stored on a user&apos;s device 
              when visiting a website.
            </p>

            <div className={styles.legalDivider}></div>

            <h2>Types of Cookies Used</h2>

            <h3>Essential Cookies</h3>
            <p>
              Necessary for the proper functioning of the website.
            </p>

            <h3>Analytical Cookies</h3>
            <p>
              Used to collect aggregated information about website usage.
            </p>

            <h3>Functional Cookies</h3>
            <p>
              Used to improve user experience and preferences.
            </p>

            <div className={styles.legalDivider}></div>

            <h2>Third-Party Cookies</h2>
            <p>
              Some cookies may be provided by third-party services used to 
              analyze traffic or improve functionality.
            </p>

            <h2>Managing Cookies</h2>
            <p>
              Users can control and manage cookies through their browser settings. 
              Disabling cookies may affect certain functionalities of the website.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

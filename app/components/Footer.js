import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h3>TRADING<span>SIGNALS</span></h3>
          <p>
            Proprietary quantitative strategies designed for institutional-grade 
            portfolio diversification. Systematic. Risk-managed. Selective.
          </p>
        </div>

        <div className={styles.column}>
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/quantitative-approach">Quantitative Approach</Link></li>
            <li><Link href="/risk-management">Risk Management</Link></li>
            <li><Link href="/who-its-for">Who We Serve</Link></li>
            <li><Link href="/access">Access Strategies</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contact</h4>
          <ul>
            <li><Link href="/access">Preliminary Assessment</Link></li>
            <li><a href="mailto:contact@tradingsignals.com">contact@tradingsignals.com</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.legalLinks}>
        <Link href="/legal-disclaimer">Legal Disclaimer</Link>
        <span className={styles.legalSep}>·</span>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <span className={styles.legalSep}>·</span>
        <Link href="/cookie-policy">Cookie Policy</Link>
        <span className={styles.legalSep}>·</span>
        <Link href="/contact">Contact</Link>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>&copy; {currentYear} TradingSignals. All rights reserved.</p>
        <p className={styles.disclaimer}>
          This website is for informational purposes only and does not constitute an offer, 
          solicitation, or recommendation to invest. Past performance is not indicative of 
          future results. All investments involve risk, including the possible loss of principal. 
          Futures trading involves substantial risk of loss and is not suitable for all investors.
        </p>
      </div>
    </footer>
  );
}

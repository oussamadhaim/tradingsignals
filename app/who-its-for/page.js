import styles from '../components/PageStyles.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';

export const metadata = {
  title: 'Who We Serve | TradingSignals',
  description: 'The approach is designed for individuals and entities seeking structured exposure to financial markets through systematic, multi-instrument strategies.',
};

export default function WhoWeServe() {
  return (
    <>
      <section className={styles.pageHeaderSplit}>
        <div className={styles.pageHeaderSplitInner}>
          <div className={styles.pageHeaderSplitText}>
            <span className="label">Who We Serve</span>
            <h1>Who We Serve</h1>
            <p>
              The approach is designed for individuals and entities seeking structured 
              exposure to financial markets through systematic, multi-instrument strategies.
            </p>
            <p>
              The strategies are particularly relevant in contexts where diversification, 
              automation, and operational scalability are required.
            </p>
          </div>
          <div className={styles.pageHeaderSplitVisual}>
            <div className={styles.whoWeServeImage}></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <span className="label">Individual Investors</span>
              <h2>Individual Investors</h2>
              <p>Private investors with available capital who:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 48px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  aim to diversify across multiple instruments and markets
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  seek structured and systematic approaches
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  are unable to efficiently manage multi-strategy execution manually
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  are interested in accessing advanced operational models not typically available through traditional banking channels
                </li>
              </ul>
              <div className="divider" style={{ margin: '48px auto' }}></div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <span className="label">Institutional</span>
              <h2>Professional and Institutional Contexts</h2>
              <p>The strategies may also be relevant for:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  family offices
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  investment managers
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  advisory firms
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  structured or emerging investment initiatives
                </li>
              </ul>
              <p>
                In these contexts, the strategies can be used as an additional operational layer 
                to support diversification and systematic execution.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <span className="label">Intermediaries</span>
              <h2>Advisory and Intermediary Profiles</h2>
              <p>The approach may also be of interest to professionals who:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 48px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  support clients in portfolio structuring
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  seek access to systematic and alternative approaches
                </li>
                <li style={{ paddingLeft: '24px', position: 'relative', color: 'var(--ivory)', fontSize: '16px', lineHeight: '1.6' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>—</span>
                  operate in contexts where automation enhances execution efficiency
                </li>
              </ul>
              <div className="divider" style={{ margin: '48px auto' }}></div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section section--alt">
        <div className={styles.contentSection}>
          <SectionReveal>
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
              <span className="label">Key Consideration</span>
              <h2 style={{ marginBottom: '24px' }}>Key Consideration</h2>
              <p style={{ fontSize: '18px', color: 'var(--ivory)', lineHeight: '1.8' }}>
                The strategies are intended for users who operate independently and 
                require structured tools to manage complex, multi-instrument exposure.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className={`section ${styles.ctaBand}`}>
        <SectionReveal>
          <div className={styles.ctaBandInner}>
            <h2>Final Note</h2>
            <p style={{ marginBottom: '40px' }}>
              Not all profiles are suitable for this approach.
            </p>
            <Button href="/access">Request a Preliminary Assessment</Button>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}

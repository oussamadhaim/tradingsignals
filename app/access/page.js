import homeStyles from '../page.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';
import AssessmentTrigger from '../components/AssessmentTrigger';

export const metadata = {
  title: 'Access to Strategies | TradingSignals',
  description: 'Access to the strategies is reserved and subject to a preliminary assessment process. Strategies are provided as operational tools deployed on your own trading account.',
};

export default function Access() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={homeStyles.hero} style={{ minHeight: '50vh', padding: '120px 24px 60px' }}>
        <div className={homeStyles.heroBg} style={{ opacity: 0.05, backgroundColor: 'var(--midnight)' }}></div>
        <div className={homeStyles.heroContent}>
          <p className={homeStyles.heroLabel} style={{ opacity: 1, animation: 'none' }}>Access to Strategies</p>
          <h1 className={homeStyles.heroTitle} style={{ fontSize: '42px', fontWeight: 500, lineHeight: 1.2, margin: '0 0 24px 0', opacity: 1, animation: 'none' }}>
            Access to Strategies
          </h1>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto 24px', opacity: 1, animation: 'none' }}>
            Access to the strategies is reserved and subject to a preliminary 
            assessment process.
          </p>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto', opacity: 1, animation: 'none' }}>
            The strategies are provided as operational tools, which users deploy 
            and utilize directly on their own trading accounts.
          </p>
        </div>
      </section>

      {/* ========== OPERATIONAL MODEL ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Operational model</h2>
              <ul className={homeStyles.overviewList} style={{ gap: '16px' }}>
                <li>strategies are connected to the user's trading platform</li>
                <li>execution is fully automated</li>
                <li>full control of the account remains with the user</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== TECHNICAL SUPPORT ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Technical support</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 16px 0' }}>Support is provided for:</p>
              <ul className={homeStyles.overviewList} style={{ gap: '12px', marginBottom: '24px' }}>
                <li>setup and connection</li>
                <li>activation of the strategies</li>
                <li>technical functioning of the system</li>
              </ul>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--ivory)', fontStyle: 'italic', margin: 0 }}>
                No financial advice or discretionary management is provided.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== ECONOMIC STRUCTURE ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Economic Structure</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Access to the strategies is based on a results-aligned model.
              </p>
              <div style={{ 
                borderLeft: '2px solid var(--gold)', 
                paddingLeft: '24px', 
                margin: '32px 0 32px 16px', 
                fontSize: '20px', 
                color: 'var(--gold)',
                fontStyle: 'italic'
              }}>
                No upfront fees are required for access to the strategies.
              </div>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Compensation, where applicable, is linked to the effective use of 
                the strategies and the outcomes generated, ensuring alignment of interests.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                This structure is designed to avoid fixed costs unrelated to actual 
                usage and to maintain a transparent framework between the parties.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--ivory)', fontStyle: 'italic', margin: 0 }}>
                Specific economic terms are defined individually following the 
                preliminary assessment and compatibility evaluation.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== ACCESS PROCESS ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Access Process</h2>
              <ul className={homeStyles.overviewList} style={{ gap: '16px', marginBottom: '32px' }}>
                <li>preliminary assessment</li>
                <li>profile evaluation</li>
                <li>introductory discussion (if applicable)</li>
                <li>technical setup and activation</li>
              </ul>
              <p style={{ fontSize: '17px', lineHeight: 1.6, color: 'var(--gold)', fontStyle: 'italic', margin: 0 }}>
                Not all requests are accepted.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== FINAL NOTE / CTA ========== */}
      <section className={`section ${homeStyles.ctaBand}`} style={{ paddingBottom: '120px', paddingTop: '50px' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 20px 0' }}>Begin the Assessment Process</h2>
              <p style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                Submit your information to initiate a confidential preliminary assessment.
              </p>
              <AssessmentTrigger>Request a Preliminary Assessment</AssessmentTrigger>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

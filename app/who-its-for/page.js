import homeStyles from '../page.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';
import AssessmentTrigger from '../components/AssessmentTrigger';

export const metadata = {
  title: 'Who We Serve | TradingSignals',
  description: 'The approach is designed for individuals and entities seeking structured exposure to financial markets through systematic, multi-instrument strategies.',
};

export default function WhoWeServe() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={homeStyles.hero} style={{ minHeight: '50vh', padding: '120px 24px 60px' }}>
        <div 
          className={homeStyles.heroBg} 
          style={{ backgroundImage: "url('/who-we-serve-bg.png')", opacity: 0.1 }}
        ></div>
        <div className={homeStyles.heroContent}>
          <p className={homeStyles.heroLabel} style={{ opacity: 1, animation: 'none' }}>Target Audience</p>
          <h1 className={homeStyles.heroTitle} style={{ fontSize: '42px', fontWeight: 500, lineHeight: 1.2, margin: '0 0 24px 0', opacity: 1, animation: 'none' }}>
            Who We Serve
          </h1>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto 24px', opacity: 1, animation: 'none' }}>
            The approach is designed for individuals and entities seeking structured 
            exposure to financial markets through systematic, multi-instrument strategies.
          </p>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto', opacity: 1, animation: 'none' }}>
            The strategies are particularly relevant in contexts where diversification, 
            automation, and operational scalability are required.
          </p>
        </div>
      </section>

      {/* ========== INDIVIDUAL INVESTORS ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Individual Investors</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>Private investors with available capital who:</p>
              <ul className={homeStyles.overviewList} style={{ gap: '16px' }}>
                <li>aim to diversify across multiple instruments and markets</li>
                <li>seek structured and systematic approaches</li>
                <li>are unable to efficiently manage multi-strategy execution manually</li>
                <li>are interested in accessing advanced operational models not typically available through traditional banking channels</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== PROFESSIONAL CONTEXTS ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Professional and Institutional Contexts</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>The strategies may also be relevant for:</p>
              <ul className={homeStyles.overviewList} style={{ gap: '16px', marginBottom: '24px' }}>
                <li>family offices</li>
                <li>investment managers</li>
                <li>advisory firms</li>
                <li>structured or emerging investment initiatives</li>
              </ul>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                In these contexts, the strategies can be used as an additional operational layer 
                to support diversification and systematic execution.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== ADVISORY PROFILES ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Advisory and Intermediary Profiles</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>The approach may also be of interest to professionals who:</p>
              <ul className={homeStyles.overviewList} style={{ gap: '16px' }}>
                <li>support clients in portfolio structuring</li>
                <li>seek access to systematic and alternative approaches</li>
                <li>operate in contexts where automation enhances execution efficiency</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== FINAL NOTE / CTA ========== */}
      <section className={`section ${homeStyles.ctaBand}`} style={{ paddingBottom: '120px', paddingTop: '50px' }}>
        <div className={homeStyles.overviewInner}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 20px 0' }}>Final Note</h2>
              <p style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                The strategies are intended for users who operate independently and 
                require structured tools to manage complex, multi-instrument exposure.
                <br /><br />
                This approach is not suitable for all profiles.
              </p>
              <AssessmentTrigger>Request a Preliminary Assessment</AssessmentTrigger>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

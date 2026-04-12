import homeStyles from '../page.module.css';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';
import AssessmentTrigger from '../components/AssessmentTrigger';

export const metadata = {
  title: 'About | TradingSignals',
  description: 'The activity is focused on the research, development, and ongoing refinement of quantitative strategies based on mathematical modeling, statistical analysis, and data-driven processes.',
};

export default function About() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className={homeStyles.hero} style={{ minHeight: '50vh', padding: '120px 24px 60px' }}>
        <div 
          className={homeStyles.heroBg} 
          style={{ backgroundImage: "url('/about-bg.png')", opacity: 0.1 }}
        ></div>
        <div className={homeStyles.heroContent}>
          <p className={homeStyles.heroLabel} style={{ opacity: 1, animation: 'none' }}>About us</p>
          <h1 className={homeStyles.heroTitle} style={{ fontSize: '42px', fontWeight: 500, lineHeight: 1.2, margin: '0 0 24px 0', opacity: 1, animation: 'none' }}>
            About
          </h1>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto 24px', opacity: 1, animation: 'none' }}>
            The activity is focused on the research, development, and ongoing refinement of 
            quantitative strategies based on mathematical modeling, statistical analysis, 
            and data-driven processes.
          </p>
          <p className={homeStyles.heroSub} style={{ fontSize: '18px', lineHeight: 1.6, margin: '0 auto', opacity: 1, animation: 'none' }}>
            The objective is to provide structured, systematic frameworks that enable 
            multi-instrument market exposure in a consistent and controlled manner.
          </p>
        </div>
      </section>

      {/* ========== OPERATIONAL TOOLS ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Operational Tools</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                Strategies are made available as operational tools, which users deploy independently on their own trading accounts.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>
                The company does not provide portfolio management, financial advisory, or brokerage services.
              </p>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: 0 }}>
                All operations are executed directly on the user's account through automated systems, ensuring full user control at all times.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== ROLE OF THE COMPANY ========== */}
      <section className="section section--alt" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 16px 0' }}>Role of the Company</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.6, margin: '0 0 24px 0' }}>The role of the company is limited to:</p>
              <ul className={homeStyles.overviewList} style={{ gap: '16px' }}>
                <li>strategy design and development</li>
                <li>model maintenance and refinement</li>
                <li>technical support for setup and connectivity</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== APPROACH & DISCLAIMER ========== */}
      <section className="section" style={{ padding: '50px 0' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '24px', margin: '16px 0 32px 16px' }}>
                <p style={{ fontSize: '24px', lineHeight: 1.4, margin: 0, fontWeight: 500, color: 'var(--ivory)' }}>
                  The approach is based on structure, discipline, and repeatability, rather than discretionary decision-making or market prediction.
                </p>
              </div>
              <p style={{ fontSize: '15px', color: 'var(--steel)', fontStyle: 'italic', margin: 0 }}>
                The strategies are intended as operational tools and do not constitute investment recommendations.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className={`section ${homeStyles.ctaBand}`} style={{ paddingBottom: '120px', paddingTop: '50px' }}>
        <div className={homeStyles.overviewInner} style={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <SectionReveal>
            <div className={homeStyles.overviewText} style={{ width: '100%', textAlign: 'left', alignItems: 'flex-start' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 500, lineHeight: 1.3, margin: '0 0 20px 0' }}>Request Access to Our Strategies</h2>
              <div style={{ marginTop: '20px' }}>
                <AssessmentTrigger>Request a Preliminary Assessment</AssessmentTrigger>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
